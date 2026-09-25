import express from 'express';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const port = Number(process.env.PORT || 3000);
const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const reportFile = process.env.MARKET_DATA_FILE || path.join(projectRoot, 'data', 'market-report.json');

app.use(express.json({ limit: '100kb' }));

async function readReport() {
  try {
    return JSON.parse(await fs.readFile(reportFile, 'utf8'));
  } catch (error) {
    if (error.code === 'ENOENT') return null;
    throw error;
  }
}

function isValidReport(report) {
  return report && typeof report === 'object' && typeof report.date === 'string' &&
    Array.isArray(report.varieties) && report.varieties.length > 0;
}

app.get('/api/market-report', async (_request, response) => {
  try {
    const report = await readReport();
    if (!report) return response.status(404).json({ error: 'No shared report has been published yet.' });
    return response.json(report);
  } catch (error) {
    console.error('Unable to read market report', error);
    return response.status(500).json({ error: 'Unable to read market report.' });
  }
});

app.put('/api/market-report', async (request, response) => {
  if (!isValidReport(request.body)) {
    return response.status(400).json({ error: 'Invalid market report.' });
  }

  try {
    await fs.mkdir(path.dirname(reportFile), { recursive: true });
    await fs.writeFile(reportFile, JSON.stringify(request.body, null, 2), 'utf8');
    return response.json(request.body);
  } catch (error) {
    console.error('Unable to save market report', error);
    return response.status(500).json({ error: 'Unable to save market report.' });
  }
});

app.delete('/api/market-report', async (_request, response) => {
  try {
    await fs.rm(reportFile, { force: true });
    return response.status(204).end();
  } catch (error) {
    console.error('Unable to reset market report', error);
    return response.status(500).json({ error: 'Unable to reset market report.' });
  }
});

app.use(express.static(path.join(projectRoot, 'dist')));
app.get('*', (_request, response) => {
  response.sendFile(path.join(projectRoot, 'dist', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Raviraj app listening on port ${port}`);
});

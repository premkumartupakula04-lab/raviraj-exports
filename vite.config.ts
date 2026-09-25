import fs from 'node:fs/promises';
import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';

const marketReportFile = process.env.MARKET_DATA_FILE || path.resolve(__dirname, 'data', 'market-report.json');

function marketReportApi(): Plugin {
  return {
    name: 'market-report-api',
    configureServer(server) {
      server.middlewares.use(async (request, response, next) => {
        if (request.url?.split('?')[0] !== '/api/market-report') {
          next();
          return;
        }

        response.setHeader('Content-Type', 'application/json');

        try {
          if (request.method === 'GET') {
            const report = JSON.parse(await fs.readFile(marketReportFile, 'utf8'));
            response.statusCode = 200;
            response.end(JSON.stringify(report));
            return;
          }

          if (request.method === 'PUT') {
            const chunks: Buffer[] = [];
            for await (const chunk of request) chunks.push(Buffer.from(chunk));
            const report = JSON.parse(Buffer.concat(chunks).toString('utf8'));

            if (!report?.date || !Array.isArray(report.varieties) || report.varieties.length === 0) {
              response.statusCode = 400;
              response.end(JSON.stringify({ error: 'Invalid market report.' }));
              return;
            }

            await fs.mkdir(path.dirname(marketReportFile), { recursive: true });
            await fs.writeFile(marketReportFile, JSON.stringify(report, null, 2), 'utf8');
            response.statusCode = 200;
            response.end(JSON.stringify(report));
            return;
          }

          if (request.method === 'DELETE') {
            await fs.rm(marketReportFile, { force: true });
            response.statusCode = 204;
            response.end();
            return;
          }

          response.statusCode = 405;
          response.end(JSON.stringify({ error: 'Method not allowed.' }));
        } catch (error) {
          if ((error as NodeJS.ErrnoException).code === 'ENOENT' && request.method === 'GET') {
            response.statusCode = 404;
            response.end(JSON.stringify({ error: 'No shared report has been published yet.' }));
            return;
          }

          console.error('Unable to process market report request', error);
          response.statusCode = 500;
          response.end(JSON.stringify({ error: 'Unable to process market report request.' }));
        }
      });
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [marketReportApi(), react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      host: '0.0.0.0',
      allowedHosts: ['raviraj-exports.onrender.com'],
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

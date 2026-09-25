# Raviraj Exports

A modern React + Vite landing page for Raviraj Exports.

## Getting started

```bash
npm install --legacy-peer-deps
npm run dev -- --host 0.0.0.0
```

## Build

```bash
npm run build
```

## Deployment

The shared market update uses the Express API in `server.js`, so deploy this as a web service rather than a static-only site:

- Build command: `npm run build`
- Start command: `npm start`
- The app listens on the platform-provided `PORT` value.
- Set `MARKET_DATA_FILE` to the path on a persistent disk, for example `/var/data/market-report.json` on Render.

After deployment, every visitor using the same public URL reads and updates the same market report through `/api/market-report`. A static deployment such as GitHub Pages cannot provide shared updates; it would require a hosted database or API instead.

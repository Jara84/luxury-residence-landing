// Genera el brochure en PDF a partir de brochure/brochure.html
// Uso:  npm i -D playwright   &&   node brochure/build.mjs
// Las fotos las toma de public/img, así que basta con correrlo desde la raíz del proyecto.
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const dir = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(dir, 'brochure.html');
const out = path.join(dir, '..', 'public', 'brochure-el-cerro-boutique-residence.pdf');

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('file://' + src, { waitUntil: 'networkidle' });
await page.emulateMedia({ media: 'print' });
await page.waitForTimeout(1500);
await page.pdf({
  path: out,
  format: 'A4',
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
});
await browser.close();
console.log('Brochure generado en', out);

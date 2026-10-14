// Runs before every build (npm "prebuild"). For each photo in public/images:
// - converts .jpg/.jpeg/.png to .webp (max 1400px wide) and removes the original
// - makes the small "-640.webp" copy the site serves to phones and small cards
// Already-processed photos are skipped, so it's quick to re-run.
import { readdir, rm, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const dir = path.resolve('public/images');

for (const file of await readdir(dir)) {
  const ext = path.extname(file).toLowerCase();
  if (file.endsWith('-640.webp') || !['.webp', '.jpg', '.jpeg', '.png'].includes(ext)) continue;

  const base = path.join(dir, path.basename(file, path.extname(file)));
  const source = path.join(dir, file);

  if (ext !== '.webp') {
    await sharp(source).rotate().resize({ width: 1400, withoutEnlargement: true }).webp({ quality: 72 }).toFile(`${base}.webp`);
    await rm(source);
    console.log(`converted ${file} -> ${path.basename(base)}.webp`);
  }

  const small = `${base}-640.webp`;
  const exists = await stat(small).then(() => true, () => false);
  if (!exists) {
    await sharp(`${base}.webp`).resize({ width: 640, withoutEnlargement: true }).webp({ quality: 70 }).toFile(small);
    console.log(`made ${path.basename(small)}`);
  }
}

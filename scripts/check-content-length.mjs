#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

function readJSON(filePath) {
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    return null;
  }
}

function collectFiles(dir, exts, files = []) {
  if (!fs.existsSync(dir)) return files;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectFiles(full, exts, files);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (exts.includes(ext)) files.push(full);
    }
  }
  return files;
}

function wordCount(text) {
  const stripped = text
    .replace(/```[\s\S]*?```/g, ' ') // code fences
    .replace(/<[^>]*>/g, ' ') // html tags
    .replace(/\{\{[^}]*\}\}/g, ' ') // templating
    .replace(/[#*_>`~\-]/g, ' ') // md punctuation
    .replace(/\s+/g, ' ') // collapse
    .trim();
  if (!stripped) return 0;
  return stripped.split(' ').length;
}

function main() {
  const configPath = path.join(process.cwd(), 'content-length.config.json');
  const cfg = readJSON(configPath);
  if (!cfg) {
    console.log('[content-check] No content-length.config.json found. Skipping.');
    process.exit(0);
  }

  const baseDir = path.join(process.cwd(), cfg.baseDir || 'content');
  const defaultMin = (cfg.defaults && cfg.defaults.minWords) || 1500;
  const entries = Array.isArray(cfg.entries) ? cfg.entries : [];
  const mapping = entries
    .filter((e) => e && typeof e.dir === 'string')
    .map((e) => ({ dir: path.join(baseDir, e.dir), minWords: e.minWords || defaultMin }));

  const files = collectFiles(baseDir, ['.md', '.mdx']);
  if (files.length === 0) {
    console.log('[content-check] No MD/MDX files found under', baseDir);
    process.exit(0);
  }

  const failures = [];
  for (const file of files) {
    const rel = path.relative(baseDir, file);
    const fullText = fs.readFileSync(file, 'utf8');
    const wc = wordCount(fullText);
    // determine minWords based on the deepest matching mapping
    const applicable = mapping
      .filter((m) => file.startsWith(m.dir))
      .sort((a, b) => b.dir.length - a.dir.length)[0];
    const minWords = applicable ? applicable.minWords : defaultMin;
    if (wc < minWords) {
      failures.push({ file: rel, wc, minWords });
    }
  }

  if (failures.length > 0) {
    console.error('[content-check] The following files do not meet minimum word count:');
    for (const f of failures) {
      console.error(` - ${f.file}: ${f.wc} < ${f.minWords}`);
    }
    process.exit(1);
  }

  console.log(`[content-check] OK (${files.length} files checked).`);
}

main();


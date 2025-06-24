import fs from 'node:fs/promises';
import path from 'node:path';

const CWD = process.cwd();
const SVG_PATH = path.join(CWD, 'public', 'OptimizedWorldMap.txt');

async function extractIds() {
  try {
    const svgContent = await fs.readFile(SVG_PATH, 'utf-8');
    const svgIds = new Set(
      [...svgContent.matchAll(/<path[^>]*?id="([^"]*?)"/g)].map((match) =>
        match[1].replace(/_/g, ' ')
      )
    );
    console.log(JSON.stringify([...svgIds].sort(), null, 2));
  } catch (error) {
    console.error('Error extracting IDs:', error);
  }
}

extractIds();

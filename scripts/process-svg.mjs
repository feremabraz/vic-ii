import fs from 'node:fs/promises';
import path from 'node:path';
import { optimize } from 'svgo';

const CWD = process.cwd();
const INPUT_SVG_PATH = path.join(CWD, 'public', 'WorldMap.svg');
const OUTPUT_SVG_PATH = path.join(CWD, 'public', 'OptimizedWorldMap.svg');

async function processSvg() {
  try {
    console.log(`Reading SVG from: ${INPUT_SVG_PATH}`);
    const svgContent = await fs.readFile(INPUT_SVG_PATH, 'utf-8');
    console.log('Successfully read SVG file.');

    const result = optimize(svgContent, {
      path: INPUT_SVG_PATH,
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              cleanupIds: false,
            },
          },
        },
        {
          name: 'removeAttrs',
          params: {
            attrs: '(stroke|fill|style|class)',
          },
        },
        'removeDimensions',
      ],
    });

    const optimizedContent = result.data.replace(/<path/g, '<path class="country-path"');

    await fs.writeFile(OUTPUT_SVG_PATH, optimizedContent, 'utf-8');
    console.log(`Optimized SVG saved to: ${OUTPUT_SVG_PATH}`);
  } catch (error) {
    console.error('Error processing SVG:', error);
  }
}

processSvg();

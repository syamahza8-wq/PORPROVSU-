import fs from 'fs';
import path from 'path';

// 1. Copy dist/index.source.html to dist/index.html and root index.html
if (fs.existsSync('dist/index.source.html')) {
  const content = fs.readFileSync('dist/index.source.html', 'utf-8');
  fs.writeFileSync('dist/index.html', content);
  fs.writeFileSync('index.html', content);
  console.log('✓ Synced dist/index.html and root index.html');
}

// 2. Sync dist/assets to root assets directory
if (fs.existsSync('dist/assets')) {
  fs.cpSync('dist/assets', 'assets', { recursive: true });
  console.log('✓ Synced dist/assets to root assets directory');
}

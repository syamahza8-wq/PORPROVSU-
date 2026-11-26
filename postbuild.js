import fs from 'fs';

// 1. Copy dist/index.source.html to dist/index.html and root index.html
if (fs.existsSync('dist/index.source.html')) {
  const content = fs.readFileSync('dist/index.source.html', 'utf-8');
  fs.writeFileSync('dist/index.html', content);
  fs.writeFileSync('index.html', content);
  console.log('✓ Synced dist/index.html and root index.html');
}

// 2. Clean old root assets directory and sync dist/assets
if (fs.existsSync('dist/assets')) {
  if (fs.existsSync('assets')) {
    fs.rmSync('assets', { recursive: true, force: true });
  }
  fs.cpSync('dist/assets', 'assets', { recursive: true });
  console.log('✓ Synced dist/assets to root assets directory');
}

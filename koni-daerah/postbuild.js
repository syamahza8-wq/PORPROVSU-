import fs from 'fs';

if (fs.existsSync('dist/index.source.html')) {
  const content = fs.readFileSync('dist/index.source.html', 'utf-8');
  fs.writeFileSync('dist/index.html', content);
  fs.writeFileSync('index.html', content);
  console.log('✓ Synced koni-daerah/dist/index.html and koni-daerah/index.html');
}

if (fs.existsSync('dist/assets')) {
  if (fs.existsSync('assets')) {
    fs.rmSync('assets', { recursive: true, force: true });
  }
  fs.cpSync('dist/assets', 'assets', { recursive: true });
  console.log('✓ Synced koni-daerah/dist/assets to koni-daerah/assets');
}

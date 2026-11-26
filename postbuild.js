import fs from 'fs';
import path from 'path';

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

// 3. Copy prebuilt koni-daerah static files into dist/koni-daerah for Vite preset compatibility
if (fs.existsSync('koni-daerah/index.html') && fs.existsSync('koni-daerah/assets')) {
  const distKoniDir = path.join('dist', 'koni-daerah');
  fs.mkdirSync(distKoniDir, { recursive: true });
  fs.copyFileSync('koni-daerah/index.html', path.join(distKoniDir, 'index.html'));
  fs.cpSync('koni-daerah/assets', path.join(distKoniDir, 'assets'), { recursive: true });
  console.log('✓ Synced koni-daerah static bundle into dist/koni-daerah');
}

// 4. Generate clean standalone HTML/CSS/JS folder for Vercel (vercel-static/)
const vercelDir = 'vercel-static';
if (fs.existsSync(vercelDir)) {
  fs.rmSync(vercelDir, { recursive: true, force: true });
}
fs.mkdirSync(vercelDir, { recursive: true });

if (fs.existsSync('index.html')) {
  fs.copyFileSync('index.html', path.join(vercelDir, 'index.html'));
}
if (fs.existsSync('assets')) {
  fs.cpSync('assets', path.join(vercelDir, 'assets'), { recursive: true });
}
if (fs.existsSync('koni-daerah/index.html') && fs.existsSync('koni-daerah/assets')) {
  const vercelKoniDir = path.join(vercelDir, 'koni-daerah');
  fs.mkdirSync(vercelKoniDir, { recursive: true });
  fs.copyFileSync('koni-daerah/index.html', path.join(vercelKoniDir, 'index.html'));
  fs.cpSync('koni-daerah/assets', path.join(vercelKoniDir, 'assets'), { recursive: true });
}

fs.writeFileSync(
  path.join(vercelDir, 'vercel.json'),
  JSON.stringify({ trailingSlash: true }, null, 2)
);

console.log('✓ Generated standalone pure HTML/CSS/JS folder: vercel-static/');

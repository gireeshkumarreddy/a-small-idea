// Wraps invitation.html into a standalone site in ./site (deployable to Netlify, Vercel, GitHub Pages…).
// Run: node build.mjs
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, readdirSync, rmSync } from 'node:fs';

const src = readFileSync('invitation.html', 'utf8');
const [head, body] = src.split('<!-- /head -->');

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#0c0b0a">
<meta property="og:title" content="A small idea.">
<meta property="og:description" content="Open when you have a minute.">
<meta property="og:type" content="website">
${head.trim()}
</head>
<body>
${body.trim()}
</body>
</html>
`;

rmSync('site', { recursive: true, force: true });
mkdirSync('site/assets', { recursive: true });
writeFileSync('site/index.html', html);
for (const f of readdirSync('assets')) copyFileSync(`assets/${f}`, `site/assets/${f}`);
console.log('Built site/index.html');

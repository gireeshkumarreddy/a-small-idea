// Wraps invitation.html into a standalone site in ./docs, which GitHub Pages serves.
// Run: node build.mjs
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, readdirSync, rmSync } from 'node:fs';

const OUT = 'docs';
const URL = 'https://gireeshkumarreddy.github.io/a-small-idea/';

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
<meta property="og:url" content="${URL}">
<meta property="og:image" content="${URL}og.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
${head.trim()}
</head>
<body>
${body.trim()}
</body>
</html>
`;

rmSync(OUT, { recursive: true, force: true });
mkdirSync(`${OUT}/assets`, { recursive: true });
writeFileSync(`${OUT}/index.html`, html);
writeFileSync(`${OUT}/.nojekyll`, '');
copyFileSync('og.jpg', `${OUT}/og.jpg`);
for (const f of readdirSync('assets')) copyFileSync(`assets/${f}`, `${OUT}/assets/${f}`);
console.log(`Built ${OUT}/index.html`);

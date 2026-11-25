// Take the 3 deterministic screenshots for Sizzle & Serve.
// Uses playwright-core + the cached chromium-1148 build; game loads offline via file://.
const { chromium } = require('playwright-core');
const path = require('node:path');
const fs = require('node:fs');

(async () => {
  const repo = path.resolve(__dirname);
  const game = path.join(repo, 'game', 'index.html');
  const outDir = path.join(repo, 'screenshots');
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch({
    executablePath: process.env.CHROMIUM_PATH ||
      '/home/hatch/.cache/ms-playwright/chromium-1148/chrome-linux/chrome',
    args: ['--no-sandbox', '--disable-gpu'],
  });
  const shots = [
    { name: '1-start.jpg', query: '?shot=start&seed=1' },
    { name: '2-play.jpg', query: '?shot=play&seed=1' },
    { name: '3-end.jpg', query: '?shot=end&seed=1' },
  ];
  for (const s of shots) {
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
    await page.goto('file://' + game + s.query, { waitUntil: 'load' });
    await page.waitForTimeout(700);
    await page.screenshot({ path: path.join(outDir, s.name), type: 'jpeg', quality: 82 });
    const st = fs.statSync(path.join(outDir, s.name));
    console.log(s.name, st.size, 'bytes');
    await page.close();
  }
  await browser.close();
  console.log('shots done');
})().catch((e) => { console.error(e); process.exit(1); });

const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('http://localhost:8090/generate-qr.html', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 3000));

  // Extract canvas as PNG
  const dataUrl = await page.evaluate(() => {
    const canvas = document.querySelector('#qr-container canvas');
    return canvas ? canvas.toDataURL('image/png') : null;
  });

  if (dataUrl) {
    const base64 = dataUrl.replace(/^data:image\/png;base64,/, '');
    fs.writeFileSync('cutkes-qr-styled.png', Buffer.from(base64, 'base64'));
    console.log('OK: cutkes-qr-styled.png saved');
  }

  // Also generate the full QR card as PDF
  await page.goto('http://localhost:8090/qr-design.html', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 2000));

  await browser.close();
})();

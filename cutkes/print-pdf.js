const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('http://localhost:8090/qr-design.html', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 3000));

  // Get the card element dimensions
  const card = await page.$('.qr-card');
  const box = await card.boundingBox();

  await page.pdf({
    path: 'cutkes-qr-card.pdf',
    width: Math.ceil(box.width + 40) + 'px',
    height: Math.ceil(box.height + 40) + 'px',
    printBackground: true,
    margin: { top: '20px', right: '20px', bottom: '20px', left: '20px' }
  });

  console.log('PDF saved: cutkes-qr-card.pdf');
  await browser.close();
})();

const puppeteer = require("puppeteer");

async function openWebsite(site) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(`https://${site}.com`);
}

async function searchGoogle(query) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(`https://www.google.com/search?q=${encodeURIComponent(query)}`);
}

module.exports = { openWebsite, searchGoogle };

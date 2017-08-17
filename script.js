const fs = require('fs');
const assert = require('assert');
const puppeteer = require('puppeteer');
const rimraf = require('rimraf');

(async() => {

  rimraf.sync('example.png');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://reg-viz.github.io/reg-suit');
  await page.screenshot({path: 'example.png'});

  browser.close();
  assert(fs.existsSync('example.png'));
  console.log(' 🎉 ');
})();

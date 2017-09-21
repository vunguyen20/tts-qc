const puppeteer = require('puppeteer');
const USERNAME_SELECTOR= '#login_field';
const PASSWORD_SELECTOR= '#password';
const BUTTON_SELECTOR = '#login > form > div.auth-form-body.mt-3 > input.btn.btn-primary.btn-block';
const CREDS = require('./creds');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://github.com/login');
  await page.click(USERNAME_SELECTOR);
  await page.type(CREDS.username);

  await page.click(PASSWORD_SELECTOR);
  await page.type(CREDS.password);

  await page.click(BUTTON_SELECTOR);

  await page.waitForNavigation();
  response.url;


 // await browser.close();
})();
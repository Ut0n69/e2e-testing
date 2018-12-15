const puppeteer = require("puppeteer");
const test = require("ava");
const config = require("../config");

module.exports = function() {
  let page;
  let browser;

  test.serial("Setup", async t => {
    browser = await puppeteer.launch(config.browser);
    page = await browser.newPage();

    await page.goto(`${config.URL}`, {
      waitUntil: "networkidle2"
    });
    await page.waitForSelector("#e2e-input-button");
    t.pass();
  });

  test.serial("Show error", async t => {
    await page.click("#e2e-input-button");
    await page.waitForSelector("#e2e-input-error");
    t.pass();
  });

  test.serial("Input", async t => {
    await page.type("#e2e-input-name", "Caroline");
    await page.type("#e2e-input-email", "caroline@example.com");
    await page.evaluate(() => {
      const element = document.querySelectorAll("#e2e-input-gender")[0];
      element.click();
    });
    await page.select("#e2e-input-country", "1");

    await page.click("#e2e-input-button");
    await page.waitForSelector("#e2e-confirmation-button");

    t.pass();
  });

  test("Completion", async t => {
    await page.click("#e2e-confirmation-button");
    await page.waitForSelector("#e2e-completion-text");

    browser.close();
    t.pass();
  });
};

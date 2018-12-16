module.exports = {
  URL: "http://localhost:8080",
  browser: {
    ignoreHTTPSErrors: true,
    headless: true,
    slowMo: 0,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  }
};

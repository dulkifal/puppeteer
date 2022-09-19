// study purpose only

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
  // sample url
  let url = 'https://puppeteer.dev/';

  await page.goto(url);
  async function sigIn(userName, password) {

    try {

      const input = await page.$('#UserName');
      await input.click({ clickCount: 3 })
      await page.type('#UserName', userName);
      const pass = await page.$('#Password');
      await pass.click({ clickCount: 3 })
      await page.type('#Password', password);
      await page.click("input[type = submit]")

      const errorMessage = await page.$('.errormessage');
      if (errorMessage) {
        console.log('is not valid username')
        return false
      } else {
        console.log('is valid username - ' + userName)
        return true
      }
    }
    catch (e) {
      console.log(e)
    }
  }
  // array for loop
  let array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  
  for (n of array) {
    let result = await sigIn(n, n)
    if (result) {
      break
    }
  }
})();
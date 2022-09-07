const { test, expect } = require("@playwright/test");

// example 1
test("testing with playwrite", async ({ browser }) => {
  // the newContext method tell the browser to open a fresh / new browser / a fresh instance with no cookies or everything that exit on your previous browsers.
//   You can axually injeck cookies inside the newContext method parameter, the your app will use the injected cookies and your may use proxy because without proxy,your app wont open
  const context = await browser.newContext();
//   console.log('constext', context)
//   Context.newPage() = Telling the browser to create a new page or actual page and add await untill this step is done
  const page = await context.newPage()
  
  // the goto method allows you to redirect the url link inserted inside the goto parameter
  // You can simply call the page fixture inside the test annotation next to browser and the test annotation will understand that you are on the default mode the the test annotation will do the browser and the newcontext methods behind the sceen.
  
   await page.goto('https://tumikole.github.io/tcgweb/htmlFiles/contact.html');

// Assertions
//   getting the page title
// get title asserstion
await page.title()
console.log("title" , await page.title())

//   Here you are expecting the title to be similar to the one on toHaveTitle method, if not, the code will throw an error
// This expect method comes from the configuartion file
await expect(page).toHaveTitle("CONTACT-THE CODING GROUND")

// playwrights support css selector
await page.locator("#firstname").type("Tumisang")
console.log("selector", page.locator(["#firstname"]))

await page.locator("#lastname").type("Ramollo")
console.log('lastname', page.locator("#lastname"))

await page.locator("#email").type("ramollosanuel2@gmail.com")
console.log('email', page.locator("#email"))

await page.locator("#message").type("fsdfdfsdffsfsdfsdfsdfdf")
console.log('message', page.locator("#message"))

await page.locator("[type=\"button\"]").click()
console.log('button', page.locator("[type=\"button\"]"))

});

test("testing with playwrite2", async function() {
    console.log("first")
})
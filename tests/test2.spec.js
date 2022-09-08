const { test, expect } = require("@playwright/test");

// test("Test 1: Testing the coding ground website", async function ({ page }) {
//   const logo = page.locator(".nav-logo");
//   const homeLink = page.locator('[href="./index.html"]');
//   let navLiItems = page.locator(".nav-menu > li");

//   //   await browser.contexts();
//   await page.goto("https://tumikole.github.io/tcgweb/index.html");
//   await page.title();
//   console.log("title", await page.title());
//   await expect(page).toHaveTitle("HOME - THE CODING GROUND");
//   await homeLink.click();
//   await expect(page).toHaveURL("https://tumikole.github.io/tcgweb/index.html");
//   await logo.click();

//   const liItemCounter = await navLiItems.count();
//   if (liItemCounter) {
//     for (let i = 0; i < liItemCounter; i++) {
//       await navLiItems.nth(i).click();
//       console.log("navLiItems", navLiItems.nth(i));
//     }
//   }
// // page.locator(".header").selectText()

// });

test("Test 2: Testing Bizzamm website ", async ({ page }) => {
  await page.goto("https://bizzamm.xyz/");
  await page.title();
  console.log("academy title" ,await page.title());
await expect(page).toHaveTitle("Source, sign & manage Contract Templates and Legal Documents | Bizzamm")
});
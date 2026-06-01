const { test, expect } = require("@playwright/test");

test("page context playwright test", async ({ page }) => {
    await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});

test.only("browser context playwright test", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    const username = page.locator("#username");
    const password = page.locator("#password");
    const submitBtn = page.locator("[type='submit']");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await username.fill("");
    await username.fill("rahulshettyacademy");
    await password.fill("Learning@830$3mK2");
    await submitBtn.click();
    await page.goto("https://rahulshettyacademy.com/angularpractice/shop");
    const text1 = await page.locator(".card-body a").nth(0).textContent();
    const text2 = await page.locator(".card-body a").nth(1).textContent();
    console.log(text1);
    console.log(text2);
    
    
    
});
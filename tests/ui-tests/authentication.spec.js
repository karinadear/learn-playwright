import { test, expect } from "@playwright/test";
test("Register Test LambdaTest Ecommerce", async ({ page }) => {

  await page.goto("https://ecommerce-playground.lambdatest.io/");

  await page.getByRole("button", { name: "My account" }).hover();
  await page.getByRole("link", { name: "Register" }).click();
  // await page.waitForTimeout(5000);
  await expect(page).toHaveURL('/register/');

  await page.getByRole("textbox", { name: "First Name" }).fill("Karina");
  await page.getByRole("textbox", { name: "Last Name" }).fill("Dear");
  await page.getByRole("textbox", { name: "E-Mail" }).fill("karinadr9j@gmail.com");
  await page.getByRole("textbox", { name: "Telephone" }).fill("1234567890");
  await page.getByRole("textbox", { name: "Password*", exact: true }).fill("****");
  await page.getByRole("textbox", { name: "Password Confirm*" }).fill("****");
  await page.getByText("I have read and agree to the").click();
  await page.getByRole("button", { name: "Continue" }).click();
  // await page.waitForTimeout(10000);
  // await expect(page).toHaveURL(
  //   "https://ecommerce-playground.lambdatest.io/index.php?route=account/success",
  // );
});

test('Login Test LambdaTest Ecommerce', async ({ page }) => {
   await page.goto("https://ecommerce-playground.lambdatest.io/");

  await page.getByRole("button", { name: "My account" }).hover();
  await page.getByRole("link", { name: "Login" }).click();
  // await page.waitForTimeout(5000);
  await expect(page).toHaveURL(
    "https://ecommerce-playground.lambdatest.io/index.php?route=account/login",
  );
   await page.getByRole("textbox", { name: "E-Mail" }).fill("karinadr9j@gmail.com");
   await page.getByRole("textbox", { name: "Password"}).fill("******");
   await page.getByRole("button", { name: "Login" }).click();
  //  await page.waitForTimeout(10000);
  //  await expect(page).toHaveURL(
  //   "https://ecommerce-playground.lambdatest.io/index.php?route=account/account",
  // );
})
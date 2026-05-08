import { test, expect } from "@playwright/test";

test("my first test", async ({ page }) => {
  await page.goto("https://formy-project.herokuapp.com/");

  // try my first test to validate
  await expect(page).toHaveURL("https://formy-project.herokuapp.com/");
});

test("learn pw on website formy project - autocomplete", async ({ page }) => {
  await page.goto("https://formy-project.herokuapp.com/");

  // await page.locator('[href="/autocomplete"]').nth(1).click();
  await page.getByRole("link", { name: "Autocomplete" }).click();
  await page.waitForTimeout(2000);
  await expect(page).toHaveURL(
    "https://formy-project.herokuapp.com/autocomplete",
  );

  // using the locator to fill the form
  // using playwright ui to make it easier to find the locater
  await page.getByRole("textbox", { name: "Address", exact: true }).fill("Sukamaju Village");
  await page.getByRole("textbox", { name: "Street address", exact: true }).fill("Klaseman");
  await page.getByRole("textbox", { name: "Street address 2" }).fill("Ahmad Yani");
  await page.getByRole("textbox", { name: "City" }).fill('Salatiga');
  await page.getByRole("textbox", { name: "State" }).fill('Indonesia');
  await page.getByRole("textbox", { name: "Zip code" }).fill('50007');
  await page.getByRole("textbox", { name: "Country" }).fill('Indonesia');
  
  // several ways to find the element using locator
  // id -> #address
  // atribute -> [placeholder="Enter your address"]
  // class -> .zip-code || page.locator('.zip-code').first() (and etc. if there are more than one element with the same class)
  // css selector -> input.form-control#address[name="address"]
});
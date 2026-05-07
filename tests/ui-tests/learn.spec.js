import { test, expect } from '@playwright/test';

test('my first test', async ({ page }) => {
    await page.goto('https://formy-project.herokuapp.com/')

    // try my first test to validate
    await expect(page).toHaveURL('https://formy-project.herokuapp.com/');
});
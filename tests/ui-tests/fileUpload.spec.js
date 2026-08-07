import { test, expect } from "@playwright/test";

test('Verify file upload', async ({page}) => { 
    await page.goto('')
    await page.locator('').setInputFiles('')
    await page.locator('').click()
    expect(await page.locator('').toHaveText(''))
 })
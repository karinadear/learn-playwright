import { test, expect } from "@playwright/test";

test('Handle Frames', async ({page}) => { 
    await page.goto('')
    const iframe = await page.frameLocator('')
    await iframe.locator('').click()
    await page.pause()
 })
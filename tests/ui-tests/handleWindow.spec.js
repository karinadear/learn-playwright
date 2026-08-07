import { test, expect } from "@playwright/test";

test('Working with Multiple Tabs', async ({browser}) => { 
    const context = await browser.newContext()
    const page = context.newPage()
    await page.goto('')

    const [ newPage ] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('').click()
    ])
    await newPage.waitForTimeout(3000)
    await newPage.locator('').fill()
    await newPage.waitForTimeout(3000)
    await newPage.close()
    
    await page.locator('').fill()
    await newPage.waitForTimeout(3000)

 })
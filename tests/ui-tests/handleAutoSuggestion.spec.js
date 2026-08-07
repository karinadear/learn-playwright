import { test, expect } from "@playwright/test";

test.only('Handle auto suggestion', async ({page}) => { 
    await page.goto('')
    await page.locator('').focus()
    await page.keyboard.type('')

    await page.waitForSelector('')
    const elements = await page.$$('')

    for (let i = 0; i < elements.length; i++) {
        const text = await elements[i].textContent()

        if (text.includes('')) {
            await elements[i].click()
            break
        }
    }

 })
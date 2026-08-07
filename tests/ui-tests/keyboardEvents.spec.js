import { test, expect } from "@playwright/test";

test('Keyboard Events In Playwright', async ({page}) => { 
    await page.goto('https://formy-project.herokuapp.com/')
    await page.getByRole('link', { name: 'Key and Mouse Press' }).click()
    await page.waitForLoadState('networkidle') // because the page is reloaded after click the link
    await expect(page).toHaveURL(/keypress/);
    await page.getByRole('textbox', { name: 'Full name' }).focus()
    await page.keyboard.type('Hello World', { delay: 100 })
    await page.getByRole('button', { name: 'Button' }).click()
    
    // await page.keyboard.press('ArrowLeft')
    // await page.keyboard.down('Shift')

    // for (let i = 0; i < 6; i++) {
    //     await page.keyboard.press('ArrowLeft')
        
    // }

    // await page.keyboard.up('Shift')
    // await page.keyboard.press('Backspace')
 })
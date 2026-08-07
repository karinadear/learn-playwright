import { test, expect } from "@playwright/test";

test('Handle Alert', async ({page}) => { 
    await page.goto('')
    page.on('dialog', async (d) => {
        expect(d.type()).toContain('')
        expect(d.message()).toContain('')
        await d.accept()
    })
    await page.locator('').click()
 })

 test('Handle Confirmation', async ({page}) => { 
    await page.goto('')
    page.on('dialog', async (d) => {
        expect(d.type()).toContain('')
        expect(d.message()).toContain('')
        await d.dismiss()
    })
    await page.locator('').click()
 })

  test('Handle Prompt', async ({page}) => { 
    await page.goto('')
    page.on('dialog', async (d) => {
        expect(d.type()).toContain('')
        expect(d.message()).toContain('')
        await d.accept('')
    })
    await page.locator('').click()
 })
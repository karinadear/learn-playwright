import { test, expect } from "@playwright/test";

test('should first', async () => { 
    await page.goto('')
    await page.locator('').click()
    await page.waitForLoadState('networkidle')
    expect(await page.locator('').toHaveText(''))
 })
import test, { expect } from "@playwright/test";

test('Handling Drop Downs', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const select = page.locator('css=select#dropdown')
    await select.selectOption('1');
    await expect(select.locator('option:checked')).toHaveText('Option 1')
})

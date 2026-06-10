import test, { expect } from "@playwright/test";


test('Hovering over elements and Confirming the User names', async({page}) => {

    await page.goto("https://the-internet.herokuapp.com/hovers");
    const items = await page.locator("css=div.figure").all();
    let i = 1;
    for (const element of items) {
        await element.hover();  
        await expect(page.getByText(`name: user${i}`, {exact: true})).toBeVisible();   
        await expect(page.locator(`[href="/users/${i}"]`)).toBeVisible();
        i++;
    }
    
})
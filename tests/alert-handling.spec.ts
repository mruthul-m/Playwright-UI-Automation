import test, { expect } from "@playwright/test";


test.describe('alert handling', async () => {

    test.beforeEach(async ({page}) => {
        page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    })

    test('alert ok', async ({page}) => {
        
        page.on('dialog', async dialog => {
            console.log(dialog.message())
            await dialog.accept()
        })

        await page.getByText('Click for JS Alert').click()
        await expect(page.locator('#result')).toHaveText('You successfully clicked an alert')
    })

    test('alert accept', async ({page}) => {
        
        page.on('dialog', async dialog => {
            console.log(dialog.message())
            await dialog.accept()
        })

        await page.getByText('Click for JS Confirm').click()
        await expect(page.locator('#result')).toHaveText('You clicked: Ok')
    })

    test('alert dismiss', async ({page}) => {
        
        page.on('dialog', async dialog => {
            console.log(dialog.message())
            await dialog.dismiss()
        })

        await page.getByText('Click for JS Confirm').click()
        await expect(page.locator('#result')).toHaveText('You clicked: Cancel')
    })

    test('alert accept with prompt', async ({page}) => {
        
        page.on('dialog', async dialog => {
            console.log(dialog.message())
            await dialog.accept('thanks')
        })

        await page.getByText('Click for JS Prompt').click()
        await expect(page.locator('#result')).toHaveText('You entered: thanks')
    })

    test('alert dismiss with prompt', async ({page}) => {
        
        page.on('dialog', async dialog => {
            console.log(dialog.message())
            await dialog.dismiss()
        })

        await page.getByText('Click for JS Prompt').click()
        await expect(page.locator('#result')).toHaveText('You entered: null')
    })


})


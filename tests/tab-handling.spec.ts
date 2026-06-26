import {test, expect} from '../fixtures/baseTest'


test('Creating new Tab', async ({page, context}) => {
    await page.goto("https://www.google.com");
    expect(await page.title()).toBe('Google')
    const page2 = await context.newPage();
    await page2.goto("https://www.github.com/");
    await expect(page2).toHaveTitle('GitHub · Change is constant. GitHub keeps you ahead. · GitHub')

})


import {test, expect} from '@playwright/test'
import { isContext } from 'node:vm';

test('Creating new Tab', async ({page, context}) => {
    await page.goto("https://www.google.com");
    const page2 = await context.newPage();
    await page2.goto("https://www.github.com/");
    

})


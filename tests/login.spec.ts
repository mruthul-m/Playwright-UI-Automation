import {test, expect} from '@playwright/test'
import { SauceDemoLoginPage } from '../pages/sauce-demo.page'

interface User  {
    readonly username: string;
    readonly password: string;
}



test.describe('Login Feature in Sauce Demo app', () => {
    
    const validUser : User = {
        username: 'standard_user',
        password: 'secret_sauce'
    }

    const LockedUser: User = {
        username: 'locked_out_user',
        password: 'secret_sauce'
    }

    const GlitchUser: User = {
        username: 'performance_glitch_user',
        password: 'secret_sauce'
    }

    test('Validu User Login', async({page}) => {
        const SauceDemoLogin = new SauceDemoLoginPage(page);
        await SauceDemoLogin.goto();
        await SauceDemoLogin.fillUsername(validUser.username);
        await SauceDemoLogin.fillPassword(validUser.password);
        await SauceDemoLogin.login();
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    })

    test('Locked user Login', async({page}) => {
        const SauceDemoLogin = new SauceDemoLoginPage(page);
        await SauceDemoLogin.goto();
        await SauceDemoLogin.fillUsername(LockedUser.username);
        await SauceDemoLogin.fillPassword(LockedUser.password);
        await SauceDemoLogin.login();
        await SauceDemoLogin.expectError();
    })

    test('Glitch User Login', async({page}) => {
        const SauceDemoLogin = new SauceDemoLoginPage(page);
        await SauceDemoLogin.goto();
        await SauceDemoLogin.fillUsername(GlitchUser.username);
        await SauceDemoLogin.fillPassword(GlitchUser.password);
        await SauceDemoLogin.login();
        await expect(SauceDemoLogin.homePageHeading).toBeVisible();
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    })

});
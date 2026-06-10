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
    
    let sauceDemoLogin: SauceDemoLoginPage;

    test.beforeEach(async ({ page }) => {
        sauceDemoLogin = new SauceDemoLoginPage(page);
        await sauceDemoLogin.goto();
    });

    test('Validu User Login', async({page}) => {
        await sauceDemoLogin.fillUsername(validUser.username);
        await sauceDemoLogin.fillPassword(validUser.password);
        await sauceDemoLogin.login();
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    })

    test('Locked user Login', async() => {
        await sauceDemoLogin.fillUsername(LockedUser.username);
        await sauceDemoLogin.fillPassword(LockedUser.password);
        await sauceDemoLogin.login();
        await sauceDemoLogin.expectError();
    })

    test('Glitch User Login', async({page}) => {
        await sauceDemoLogin.fillUsername(GlitchUser.username);
        await sauceDemoLogin.fillPassword(GlitchUser.password);
        await sauceDemoLogin.login();
        await expect(sauceDemoLogin.homePageHeading).toBeVisible();
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    })

});
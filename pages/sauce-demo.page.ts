import { expect, Locator, Page } from "@playwright/test";

export class SauceDemoLoginPage {
    readonly username : Locator;
    readonly password : Locator;
    readonly submit : Locator;
    readonly page: Page;
    readonly error: Locator;
    readonly homePageHeading: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.getByPlaceholder("Username");
        this.password = page.getByPlaceholder("Password");
        this.submit = page.getByTestId("login-button");
        this.error = page.getByTestId("error")
        this.homePageHeading = page.locator("css=.app_logo");
    }

    async goto() {
        await this.page.goto("https://www.saucedemo.com/");
    }
    async fillUsername(username: string) {
        await this.username.fill(username);
    }

    async fillPassword(password: string) {
        await this.password.fill(password);
    }

    async login() {
        await this.submit.click();
    }

    async expectError() {
        await expect(this.error).toBeVisible();
        await expect(this.error).toContainText("Epic sadface: Sorry, this user has been locked out.");
    }

}
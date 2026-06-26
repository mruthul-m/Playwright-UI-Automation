import { test as base, expect } from '@playwright/test';

export const test = base;

export { expect };

test.beforeEach(async ({ page }) => {
    console.log("========== Test Started ==========");
});

test.afterEach(async ({ page }, testInfo) => {

    if (testInfo.status !== testInfo.expectedStatus) {

        const timestamp = new Date()
            .toISOString()
            .replace(/[:.]/g, "-");

        const testName = testInfo.title
            .replace(/\s+/g, "_");

        await page.screenshot({
            path: `screenshots/${testName}_${timestamp}.png`,
            fullPage: true
        });

        console.log("Screenshot Captured");
    }

    console.log("========== Test Finished ==========");
});
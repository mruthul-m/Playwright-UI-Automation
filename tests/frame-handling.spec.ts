import test, { expect } from "@playwright/test";

// handles dynamic date changes!
test('frame handling and Date picker', async ({page}) => {
    await page.goto("https://jqueryui.com/datepicker/");

    const frame = page.frameLocator('.demo-frame');
    await frame.locator("css=p > input").click();

    const dayOfMonth: number = new Date().getDate();
    const todaysDay = frame.locator('css=.ui-datepicker-calendar tbody').getByText(`${dayOfMonth}`);
    await todaysDay.click();

    const options: Intl.DateTimeFormatOptions = { month: '2-digit', day: '2-digit', year: 'numeric' };
    const formattedDate: string = new Date().toLocaleDateString('en-US', options);

    await expect(frame.locator("css=p > input")).toHaveValue(formattedDate);
});
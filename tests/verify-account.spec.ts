import test, { expect } from "@playwright/test";

const path = 'https://qaplayground.dev/apps/verify-account/';
const code = '999999';

test.describe('Account verification demo', () => {
    test.beforeAll(async ({ browser }) => {
        await (await browser.newPage()).goto(path);
    });

    test('should display the correct title', async ({ page }) => {
        await page.goto(path);
        expect(await page.locator('#title').innerText())
            .toBe('Verify Your Account');
    });

    test('should display the valid code', async ({page}) => {
        let labelText = await page.locator('[class*="info"]').innerText();
        let displayedCode = labelText.match(/\d/g)?.join('');
        expect(displayedCode).toBe(code);
    });

    test('should submit the valid code successfully', async ({page}) => {
        let inputs = await page.locator('input[class*="code"]').all();
        for(let i = 0; i < inputs.length; i++) {
            await inputs[i].fill(code[i]);
        }
        expect(await page.locator('[class*="info"]').innerText())
            .toBe('Success');
    });
});
import test, { expect, Page } from "@playwright/test";

const path = 'https://qaplayground.dev/apps/verify-account/';
const code = '999999';

test.describe('Account verification demo', () => {
    
    let page: Page;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage()
        await page.goto(path);
    });

    test('should display the correct title', async () => {
        expect(await page.locator('#title').innerText())
            .toBe('Verify Your Account');
    });

    test('should display the valid code', async () => {
        let labelText = await page.locator('[class*="info"]').innerText();
        let displayedCode = labelText.match(/\d/g)?.join('');
        expect(displayedCode).toBe(code);
    });

    test('should submit the valid code successfully', async () => {
        let inputs = await page.locator('input[class*="code"]').all();
        for(let i = 0; i < inputs.length; i++) {
            // Must use type() instead of fill() here to properly submit the code
            await inputs[i].type(code[i]);
        }
        expect(await page.locator('[class*="info"]').innerText())
            .toBe('Success');
    });
});
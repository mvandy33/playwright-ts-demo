import test, { expect } from "@playwright/test";
import VerifyAccountPage from "../pages/verify-account.page";

const path = 'apps/verify-account/';
const code = '999999';
const invalidCode = '123456';

test.describe('Account verification demo', () => {
    
    let verifyAccountPage: VerifyAccountPage;

    test.beforeAll(async ({ browser }) => {
        verifyAccountPage = new VerifyAccountPage(await browser.newPage());
        await verifyAccountPage.navigate();
    });

    test('should display the correct title', async () => {
        expect(await verifyAccountPage.getTitle())
            .toBe('Verify Your Account');
    });

    test('should display the valid code', async () => {
        let labelText = await verifyAccountPage.getInfoText();
        let displayedCode = labelText.match(/\d/g)?.join('');
        expect(displayedCode).toBe(code);
    });

    test('should not accept an invalid code', async () => {
        await verifyAccountPage.submitCode(invalidCode);
        expect(await verifyAccountPage.getInfoText())
            .not.toBe('Success');
    });

    test('should submit the valid code successfully', async () => {
        await verifyAccountPage.submitCode(code);
        expect(await verifyAccountPage.getInfoText())
            .toBe('Success');
    });
});
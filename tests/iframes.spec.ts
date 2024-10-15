import test, { expect } from "@playwright/test";
import NestedIframesPage from "../pages/nested-iframes.page";

test.describe('Nested iframes demo', () => {

    let nestedIframesPage: NestedIframesPage;

    test.beforeAll(async ({ browser }) => {
        nestedIframesPage = new NestedIframesPage(await browser.newPage());
        await nestedIframesPage.navigate();
    });

    test('should display the button', async function() {
        expect(await nestedIframesPage.button.isVisible())
            .toBe(true);
    });

    test('should click the button and display a success message', async () => {
        await nestedIframesPage.clickButton();
        expect(await nestedIframesPage.getMessageText())
            .toBe('Button Clicked');
    });

});
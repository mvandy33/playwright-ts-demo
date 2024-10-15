import test, { expect, Page } from "@playwright/test";
import NewTabPage from "../pages/new-tab.page";
import OpenedTabPage from "../pages/opened-tab.page";
import { getNewTab, getPage } from "../utils/helpers";

const newPagePartialUrl = 'new-page';

test.describe('New tab demo', () => {

    let page: Page;
    let newTabPage: NewTabPage;
    let openedTabPage: OpenedTabPage;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        newTabPage = new NewTabPage(page);
        await newTabPage.navigate();
    });

    test('should display the new tab button', async () => {
        expect(await newTabPage.openTabButton.isVisible())
            .toBe(true);
    });

    test('should open and view the tab', async () => {
        await newTabPage.openNewTab();
        openedTabPage = new OpenedTabPage(await newTabPage.page.waitForEvent('popup', { timeout: 5000 }));
        expect(openedTabPage.page.url()).toContain(newPagePartialUrl);
    });

    test('should display the new tab title', async () => {
        expect(await openedTabPage.getTitle())
            .toBe('Welcome to the new page!');
    });
});
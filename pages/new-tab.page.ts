import { Locator, Page } from "@playwright/test";
import PageObject from "./abstract/page-object";

const path = 'apps/new-tab/';

export default class NewTabPage extends PageObject {

    openTabButton: Locator;

    /**
     * The page used to test new tab functionality
     * @param page 
     */
    constructor(page: Page) {
        super(page);

        this.openTabButton = page.locator('#open');
    }

    async navigate() {
        await this.page.goto(path);
    }

    async openNewTab() {
        await this.openTabButton.click();
    }
}
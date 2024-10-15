import { Locator, Page } from "@playwright/test";
import PageObject from "./abstract/page-object";

const path = 'apps/new-tab/';

export default class OpenedTabPage extends PageObject {

    titleLabel: Locator;

    /**
     * The page that is opened when the user clicks the new tab button on the new tab page
     * @param page 
     */
    constructor(page: Page) {
        super(page);

        this.titleLabel = page.locator('h1');
    }

    async navigate() {
        await this.page.goto(path);
    }

    async getTitle() {
        return await this.titleLabel.innerText();
    }
}
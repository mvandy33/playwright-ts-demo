import { Page } from "@playwright/test";

export default abstract class PageObject {

    page: Page;

    /**
     * The abstract class from which all pages should inherit
     * - Not entirely sure if this will be necessary/useful for Playwright - can be removed if not
     * @param page 
     */
    constructor(page: Page) {
        this.page = page;
    }
}
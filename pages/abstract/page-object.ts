import { Page } from "@playwright/test";

export default abstract class PageObject {

    page: Page;

    /**
     * The abstract class from which all pages should inherit
     * - Will be useful if global actions are required before interacting with elements:
     *   custom waiting, ad removal, etc.
     * @param page 
     */
    constructor(page: Page) {
        this.page = page;
    }
}
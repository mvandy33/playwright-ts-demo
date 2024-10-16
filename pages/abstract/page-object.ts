import { Locator, Page } from "@playwright/test";

export default abstract class PageObject {

    finder: Page | Locator;

    /**
     * The abstract class from which all pages should inherit
     * - Will be useful if global actions are required before interacting with elements:
     *   custom waiting, ad removal, etc.
     * @param finder 
     */
    constructor(finder: Page | Locator) {
        this.finder = finder;
    }
}
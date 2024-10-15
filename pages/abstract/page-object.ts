import { Page } from "@playwright/test";

export default abstract class PageObject {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }
}
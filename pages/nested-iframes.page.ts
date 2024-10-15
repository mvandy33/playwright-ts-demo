import { FrameLocator, Locator, Page } from "@playwright/test";
import PageObject from "./abstract/page-object";

const path = 'apps/iframe/';

export default class NestedIframesPage extends PageObject {

    firstFrame: FrameLocator;
    secondFrame: FrameLocator;
    button: Locator;
    successMessage: Locator;

    /**
     * The page used to test nested iframes navigation
     * @param page 
     */
    constructor(page: Page) {
        super(page);

        this.firstFrame = page.frameLocator('#frame1');
        this.secondFrame = this.firstFrame.frameLocator('#frame2');
        this.button = this.secondFrame.locator('a[class*="btn"]');
        this.successMessage = this.secondFrame.locator('#msg');
    }

    async navigate() {
        await this.page.goto(path);
    }

    async clickButton() {
        await this.button.click();
    }

    async getMessageText() {
        return await this.successMessage.innerText();
    }
}
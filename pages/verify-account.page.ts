import { Locator, Page } from "@playwright/test";
import PageObject from "./abstract/page-object";

const path = 'apps/verify-account/';

export default class VerifyAccountPage extends PageObject {

    titleLabel: Locator;
    infoLabel: Locator;
    codeInput: Locator;

    constructor(page: Page) {
        super(page);

        this.titleLabel = page.locator('#title');
        this.infoLabel = page.locator('[class*="info"]');
        this.codeInput = page.locator('input[class*="code"]');
    }

    async navigate() {
        await this.page.goto(path);
    }

    async getTitle() {
        return await this.titleLabel.innerText();
    }

    async getInfoText() {
        return await this.infoLabel.innerText();
    }

    async submitCode(code: string) {
        let inputs = await this.codeInput.all();
        for (let i = 0; i < inputs.length; i++) {
            // Must use type() instead of fill() here to properly submit the code
            await inputs[i].type(code[i]);
        }
    }

}
import { Locator, Page } from "@playwright/test";
import PageObject from "./abstract/page-object";

const path = 'apps/upload/';

export default class UploadPage extends PageObject {

    fileInput: Locator;
    numberOfFilesLabel: Locator;

    /**
     * The page used to test file upload capabilities
     * @param page 
     */
    constructor(page: Page) {
        super(page);

        this.fileInput = page.locator('#file-input');
        this.numberOfFilesLabel = page.locator('#num-of-files');
    }

    async navigate() {
        await this.page.goto(path);
    }

    async getFileCount() {
        let text = await this.numberOfFilesLabel.innerText();
        let num = text.match(/\d+/g);
        if (num != undefined) {
            return parseInt(num[0]);
        }
        return 0;
    }

    async uploadFile(file: string) {
        await this.fileInput.setInputFiles([file]);
    }
}
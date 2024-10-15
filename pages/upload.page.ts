import { Locator, Page } from "@playwright/test";
import PageObject from "./abstract/page-object";

const path = 'apps/upload/';

export default class UploadPage extends PageObject {

    fileInput: Locator;
    uploadButton: Locator;
    numberOfFilesLabel: Locator;
    uploadedFile: Locator;

    /**
     * The page used to test file upload capabilities
     * @param page 
     */
    constructor(page: Page) {
        super(page);

        this.fileInput = page.locator('#file-input');
        this.uploadButton = page.locator('[class*="btn-green-outline"]');
        this.numberOfFilesLabel = page.locator('#num-of-files');
        this.uploadedFile = page.locator('[id="images"] figure');
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

    async uploadFiles(files: string[]) {
        await this.fileInput.setInputFiles(files);
    }

    async uploadFilesWithDialog(files: string[]) {
        let dialogPromise = this.page.waitForEvent('filechooser');
        await this.uploadButton.click();
        let dialog = await dialogPromise;
        await dialog.setFiles(files);
    }

    async getUploadedFiles() {
        return (await this.uploadedFile.all()).map(x => new UploadedFile(this.page, x));
    }
}

class UploadedFile extends PageObject {

    locator: Locator;
    nameLabel: Locator;

    /**
     * A single uploaded file element
     * - This is a bit over-engineered, but serves the purpose of illustrating how a list
     *   with complex children could be handled
     * @param page 
     * @param locator 
     */
    constructor(page: Page, locator: Locator) {
        super(page);
        this.locator = locator;

        this.nameLabel = this.locator.locator('figcaption');
    }

    async getFileName() {
        return await this.nameLabel.innerText();
    }
}
import test, { expect } from "@playwright/test";
import UploadPage from "../pages/upload.page";
import path from "path";

const file = path.join(__dirname, '../data/img/logo.jpg');

test.describe('File upload demo', () => {

    let uploadPage: UploadPage;

    test.beforeAll(async ({ browser }) => {
        console.log(file);
        uploadPage = new UploadPage(await browser.newPage());
        await uploadPage.navigate();
    });

    test('should start with no files uploaded', async () => {
        expect(await uploadPage.getFileCount())
            .toBe(0);
    });

    test('should upload a file using the Playwright set files method', async function() {
        await uploadPage.uploadFile(file);
        expect(await uploadPage.getFileCount())
            .toBe(1);
    });
});
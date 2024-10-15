import test, { expect } from "@playwright/test";
import UploadPage from "../pages/upload.page";
import path from "path";

const files = [
    'logo1.jpg',
    'logo2.jpg',
    'logo3.png'
];
const filePaths = files.map(file => path.join(__dirname, '../data/img/', file));

test.describe('File upload demo', () => {

    let uploadPage: UploadPage;

    test.beforeAll(async ({ browser }) => {
        uploadPage = new UploadPage(await browser.newPage());
        await uploadPage.navigate();
    });

    test('should start with no files uploaded', async () => {
        expect(await uploadPage.getFileCount())
            .toBe(0);
    });

    test('should upload a single file using the Playwright set files method', async function () {
        await uploadPage.uploadFiles([filePaths[0]]);
        expect(await uploadPage.getFileCount())
            .toBe(1);
        expect(await (await uploadPage.getUploadedFiles())[0].getFileName())
            .toBe(files[0]);
    });

    test('should upload a single file using the file dialog', async () => {
        await uploadPage.uploadFilesWithDialog([filePaths[1]]);
        expect(await uploadPage.getFileCount())
            .toBe(1);
        expect(await (await uploadPage.getUploadedFiles())[0].getFileName())
            .toBe(files[1]);
    });

    test('should upload multiple files', async () => {
        await uploadPage.uploadFiles(filePaths);
        expect(await uploadPage.getFileCount())
            .toBe(3);
        let uploadedFiles = await uploadPage.getUploadedFiles();
        for(let i = 0; i < files.length; i++) {
            expect(await uploadedFiles[i].getFileName())
                .toBe(files[i]);
        }
    });
});
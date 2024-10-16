import { Locator, Page } from "@playwright/test";
import Matchable from "./matchable";
import PageObject from "./page-object";

export default abstract class ListPageObject extends PageObject {
    /**
     * Class to extend when the inheriting page object needs to operate on a list of elements
     * @param finder 
     */
    constructor(finder: Page | Locator) {
        super(finder);
    }

    /**
     * Get a list of page objects whose parent elements match the provided locator
     * @param Type classname of the type of page object to be returned in the list
     * @param locator the parent element locator for each list item
     * @returns
     */
    async getPageObjectList<T extends Matchable>(Type: new (locator: Locator) => T, locator: Locator): Promise<T[]> {
        let elements = await locator.all();
        return elements.map(el => new Type(el));
    }

    /**
     * Get from a list a page object that matches the given info
     * - If no match is found, returns undefined
     * @param Type 
     * @param locator 
     * @param info
     */
    async getPageObjectMatch<T extends Matchable>(Type: new (locator: Locator) => T, locator: Locator, info: object) {
        let list = await this.getPageObjectList(Type, locator);
        for (let matchable of list) {
            if (await matchable.isMatch(info)) {
                return matchable;
            }
        }
    }
}
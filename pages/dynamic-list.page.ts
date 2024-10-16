import { Locator, Page } from "@playwright/test";
import PageObject from "./abstract/page-object";
import Matchable from "./abstract/matchable";

export default class DynamicListPage extends PageObject {

    /**
     * The page used to test dynamic list validations
     * @param page 
     */
    constructor(page: Page) {
        super(page);
    }
}

class SuperheroListItem extends PageObject implements Matchable {
    constructor(locator: Locator) {
        super(locator);
    }

    async getInfo() {
        return {

        };
    };

    async isMatch(info: {

    }) {
        return false;
    };
}
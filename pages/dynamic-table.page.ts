import { Locator, Page } from "@playwright/test";
import PageObject from "./abstract/page-object";
import Matchable from "./abstract/matchable";
import ListPageObject from "./abstract/list-page-object";
import SuperheroModel from "../models/superhero.model";
import { compare } from "../utils/helpers.util";

const path = 'apps/dynamic-table/';

export default class DynamicTablePage extends ListPageObject {

    superheroListItem: Locator;

    /**
     * The page used to test dynamic list validations
     * @param page 
     */
    constructor(page: Page) {
        super(page);

        this.superheroListItem = page.locator('[id="tbody"] > tr');
    }

    async navigate() {
        await this.page.goto(path);
    }

    async getSuperheroes() {
        return await this.getPageObjectList(SuperheroListItem, this.superheroListItem);
    }

    async getSuperhero(info: SuperheroModel) {
        return await this.getPageObjectMatch(SuperheroListItem, this.superheroListItem, info);
    }

    async getSuperheroByName(name?: string) {
        if (name == undefined) {
            throw Error('Superhero name cannot be undefined');
        }
        return await this.getSuperhero({ name: name });
    }
}

class SuperheroListItem extends PageObject implements Matchable {

    locator: Locator;

    nameLabel: Locator;
    emailLabel: Locator;
    realNameLabel: Locator;

    constructor(page: Page, locator: Locator) {
        super(page);
        this.locator = locator;

        this.nameLabel = locator.locator('[class*="ml-4"] [class*="text-white"]');
        this.emailLabel = locator.locator('[class*="ml-4"] [class*="text-gray"]');
        this.realNameLabel = locator.locator('[class*="py-4"] > [class*="text-white"]');
    }

    async getInfo() {
        return new SuperheroModel({
            name: await this.getName(),
            email: await this.getEmail(),
            realName: await this.getRealName()
        });
    };

    async getName() {
        return await this.nameLabel.innerText();
    }

    async getEmail() {
        return await this.emailLabel.innerText();
    }

    async getRealName() {
        return await this.realNameLabel.innerText();
    }

    async isMatch(info: SuperheroModel) {
        return compare(await this.getInfo(), info) === '';
    };
}
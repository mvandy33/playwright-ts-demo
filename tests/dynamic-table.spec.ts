import test, { expect } from "@playwright/test";
import DynamicTablePage from "../pages/dynamic-table.page";
import heroesData from "../data/json/heroes.data";
import { compare } from "../utils/helpers.util";

test.describe('Dynamic table demo', () => {
    
    let dynamicTablePage: DynamicTablePage;

    test.beforeAll(async ({browser}) => {
        dynamicTablePage = new DynamicTablePage(await browser.newPage());
        await dynamicTablePage.navigate();
    });

    test('should display Iron Man somewhere in the list', async () => {
        let hero = await (await dynamicTablePage.getSuperheroByName(heroesData.ironMan.name))?.getInfo();
        expect(compare(hero, heroesData.ironMan)).toBe('');
    });

    test('should display Hulk somewhere in the list', async () => {
        let hero = await (await dynamicTablePage.getSuperheroByName(heroesData.hulk.name))?.getInfo();
        expect(compare(hero, heroesData.hulk)).toBe('');
    });

    test('should display Ant-Man somewhere in the list', async () => {
        let hero = await (await dynamicTablePage.getSuperheroByName(heroesData.antMan.name))?.getInfo();
        expect(compare(hero, heroesData.antMan)).toBe('');
    });

    test('should display Deadpool somewhere in the list', async () => {
        let hero = await (await dynamicTablePage.getSuperheroByName(heroesData.deadpool.name))?.getInfo();
        expect(compare(hero, heroesData.deadpool)).toBe('');
    });

    test('should display Spider-Man somewhere in the list', async () => {
        let hero = await (await dynamicTablePage.getSuperheroByName(heroesData.spiderMan.name))?.getInfo();
        expect(compare(hero, heroesData.spiderMan)).toBe('');
    });

    test('should display Captain America somewhere in the list', async () => {
        let hero = await (await dynamicTablePage.getSuperheroByName(heroesData.captainAmerica.name))?.getInfo();
        expect(compare(hero, heroesData.captainAmerica)).toBe('');
    });

    test('should display Black Widow somewhere in the list', async () => {
        let hero = await (await dynamicTablePage.getSuperheroByName(heroesData.blackWidow.name))?.getInfo();
        expect(compare(hero, heroesData.blackWidow)).toBe('');
    });

    test('should display Doctor Strange somewhere in the list', async () => {
        let hero = await (await dynamicTablePage.getSuperheroByName(heroesData.doctorStrange.name))?.getInfo();
        expect(compare(hero, heroesData.doctorStrange)).toBe('');
    });

});
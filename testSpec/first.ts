import { browser } from "protractor";
import { FirstPOM } from "../pageObject/firstPOM";

describe('Testing the first page', () => {

    beforeEach(async () => {
        browser.waitForAngularEnabled(false);
        const firstPOM = new FirstPOM()
        await firstPOM.website
    })

    afterEach(async () => {
        browser.close()
    })

    it('Check if redirected to the correct page', async () => {
        expect(await browser.getCurrentUrl()).toContain('seleniumPractise')
    })

    it('Check if the title is correct', async () => {
        const firstPOM = new FirstPOM()
        expect(await firstPOM.title.getText()).toBe('GREENKART')
    })

    fit('Check the number of displayed products', async () => {
        const firstPOM = new FirstPOM()
        expect(await firstPOM.products.count()).toBe(30)
    })

})

import { $, $$, browser, element, ElementArrayFinder, ElementFinder } from "protractor";

export class FirstPOM {

    website = browser.get('https://rahulshettyacademy.com/seleniumPractise/#/')
    title : ElementFinder = $('.greenLogo')
    products : ElementArrayFinder = $$('.products-wrapper .products .product')

}
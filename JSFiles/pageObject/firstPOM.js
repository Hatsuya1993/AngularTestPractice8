"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirstPOM = void 0;
const protractor_1 = require("protractor");
class FirstPOM {
    constructor() {
        this.website = protractor_1.browser.get('https://rahulshettyacademy.com/seleniumPractise/#/');
        this.title = protractor_1.$('.greenLogo');
        this.products = protractor_1.$$('.products-wrapper .products .product');
    }
}
exports.FirstPOM = FirstPOM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3RQT00uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0L2ZpcnN0UE9NLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF3RjtBQUV4RixNQUFhLFFBQVE7SUFBckI7UUFFSSxZQUFPLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsb0RBQW9ELENBQUMsQ0FBQTtRQUMzRSxVQUFLLEdBQW1CLGNBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUN2QyxhQUFRLEdBQXdCLGVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFBO0lBRTlFLENBQUM7Q0FBQTtBQU5ELDRCQU1DIn0=
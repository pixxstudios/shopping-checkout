const { PRODUCTS } = require('../utils/util');

describe("Main tests", () => {
    describe("Check the products info", () => {
        console.log(PRODUCTS);
        const { super_ipad, macbook_pro, apple_tv, vga_adaptor } = PRODUCTS;
        test("Check ipad product info", () => {
            expect(super_ipad.name).toBe(549.99);
            expect(super_ipad.sku).toBe(1399.99);
            expect(super_ipad.price).toBe(109.50);
        })
    })
});
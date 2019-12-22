const { price_rules } = require('../utils/price-rules');
const { CalculateBill, AddItem } = require('../index');
const { PRODUCTS } = require('../utils/products');

describe("Price rules", () => {
    describe("Apple TV", () => {
        const Items = [];
        
        test("Price for 1 Apple TV should be 109.50", () => {
            AddItem(PRODUCTS.apple_tv);
            expect(CalculateBill(Items)).toBe(109.50);
        });

        test("Price for 2 Apple TV should be 219", () => {
            AddItem(PRODUCTS.apple_tv);
            expect(CalculateBill(Items)).toBe(219);
        });

        test("Price for 3 Apple TV should be 219", () => {
            AddItem(PRODUCTS.apple_tv);
            expect(CalculateBill(Items)).toBe(219);
        });

        test("Price for 4 Apple TV should be 328.50", () => {
            AddItem(PRODUCTS.apple_tv);
            expect(CalculateBill(Items)).toBe(328.50);
        });

        test("Price for 5 Apple TV should be 438", () => {
            AddItem(PRODUCTS.apple_tv);
            expect(CalculateBill(Items)).toBe(438);
        });

        test("Price for 6 Apple TV should be 438", () => {
            AddItem(PRODUCTS.apple_tv);
            expect(CalculateBill(Items)).toBe(438);
        });
    });
});
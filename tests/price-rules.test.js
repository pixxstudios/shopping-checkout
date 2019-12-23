const { CalculateBill } = require('../index');
const { PRODUCTS } = require('../utils/products');

describe("Price rules", () => {

    describe("No products", () => {
        const Items = [];
        test("Price should be 0", () => {
            expect(CalculateBill(Items)).toBe(0);
        });
    });

    describe("Apple TV", () => {
        const Items = [];

        test("Price for 1 Apple TV should be 109.50", () => {
            Items.push(PRODUCTS.apple_tv);
            expect(CalculateBill(Items)).toBe(109.50);
        });

        test("Price for 2 Apple TV should be 219", () => {
            Items.push(PRODUCTS.apple_tv);
            expect(CalculateBill(Items)).toBe(219);
        });

        test("Price for 3 Apple TV should be 219", () => {
            Items.push(PRODUCTS.apple_tv);
            expect(CalculateBill(Items)).toBe(219);
        });

        test("Price for 4 Apple TV should be 328.50", () => {
            Items.push(PRODUCTS.apple_tv);
            expect(CalculateBill(Items)).toBe(328.50);
        });

        test("Price for 5 Apple TV should be 438", () => {
            Items.push(PRODUCTS.apple_tv);
            expect(CalculateBill(Items)).toBe(438);
        });

        test("Price for 6 Apple TV should be 438", () => {
            Items.push(PRODUCTS.apple_tv);
            expect(CalculateBill(Items)).toBe(438);
        });
    });

    describe("iPad", () => {
        const Items = [];

        test("Price for 1 iPad should be 549.99", () => {
            Items.push(PRODUCTS.super_ipad);
            expect(CalculateBill(Items)).toBe(549.99);
        });

        test("Price for 2 iPads should be 1099.98", () => {
            Items.push(PRODUCTS.super_ipad);
            expect(CalculateBill(Items)).toBe(1099.98);
        });

        test("Price for 3 iPads should be 1649.97", () => {
            Items.push(PRODUCTS.super_ipad);
            expect(CalculateBill(Items)).toBe(1649.97);
        });

        test("Price for 4 iPads should be 2199.96", () => {
            Items.push(PRODUCTS.super_ipad);
            expect(CalculateBill(Items)).toBe(2199.96);
        });

        test("Price for 5 iPads should be 2499.95", () => {
            Items.push(PRODUCTS.super_ipad);
            expect(CalculateBill(Items)).toBe(2499.95);
        });

        test("Price for 10 iPads should be 4999.90", () => {
            Items.push(PRODUCTS.super_ipad);
            Items.push(PRODUCTS.super_ipad);
            Items.push(PRODUCTS.super_ipad);
            Items.push(PRODUCTS.super_ipad);
            Items.push(PRODUCTS.super_ipad);
            expect(CalculateBill(Items)).toBe(4999.90);
        });
    });

    describe("VGA", () => {
        const Items = [];

        test("Price for 1 VGA should be 30", () => {
            Items.push(PRODUCTS.vga_adapter);
            expect(CalculateBill(Items)).toBe(30);
        });

        test("Price for 3 VGA should be 90", () => {
            Items.push(PRODUCTS.vga_adapter);
            Items.push(PRODUCTS.vga_adapter);
            expect(CalculateBill(Items)).toBe(90);
        });

        test("Price for 5 VGA should be 150", () => {
            Items.push(PRODUCTS.vga_adapter);
            Items.push(PRODUCTS.vga_adapter);
            expect(CalculateBill(Items)).toBe(150);
        });
    });
});
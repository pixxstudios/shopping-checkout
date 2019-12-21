const { PRODUCTS } = require('../utils/products');

describe("Products", () => {
    describe("Check the products info", () => {
        const { super_ipad, macbook_pro, apple_tv, vga_adapter } = PRODUCTS;

        test("Check ipad info", () => {
            expect(super_ipad.name).toBe('Super iPad');
            expect(super_ipad.sku).toBe('ipd');
            expect(super_ipad.price).toBe(549.99);
        });

        test("Check macbook pro info", () => {
            expect(macbook_pro.name).toBe('Macbook Pro');
            expect(macbook_pro.sku).toBe('mbp');
            expect(macbook_pro.price).toBe(1399.99);
        });

        test("Check apple tv info", () => {
            expect(apple_tv.name).toBe('Apple TV');
            expect(apple_tv.sku).toBe('atv');
            expect(apple_tv.price).toBe(109.50);
        });

        test("Check vga adapter info", () => {
            expect(vga_adapter.name).toBe('VGA Adapter');
            expect(vga_adapter.sku).toBe('vga');
            expect(vga_adapter.price).toBe(30.00);
        });
    });
});
const { PRODUCTS } = require('../utils/products');

const getTotalItems = (Products) => {
    const productsQuantity = {};

    Products.forEach(product => {
        const { sku } = product;

        if (productsQuantity.hasOwnProperty(sku)) {
            productsQuantity[sku]++;
        } else {
            productsQuantity[sku] = 1;
        }
    });

    return productsQuantity;
}

const price_rules = (Products) => {
    const Items = getTotalItems(Products);
    let total_bill = 0;
    for(item in Items) {
        switch(item) {
            case 'atv': {
                const DISCOUNT_QUANTITY = 3;
                const total_apple_tv = Items[item];
                if(total_apple_tv < DISCOUNT_QUANTITY) {
                    total_bill = total_apple_tv * PRODUCTS.apple_tv.price;
                } else {
                    total_bill = (total_apple_tv - Math.floor(total_apple_tv/DISCOUNT_QUANTITY)) * PRODUCTS.apple_tv.price;
                }
                break;
            }

            case 'ipd': {
                const DISCOUNT_QUANTITY = 5;
                const DISCOUNT_PRICE = 499.99;
                const total_ipads = Items[item];
                if(total_ipads < DISCOUNT_QUANTITY) {
                    total_bill = total_ipads * PRODUCTS.super_ipad.price;
                } else {
                    total_bill = total_ipads * DISCOUNT_PRICE;
                }
                break;
            }
        }
    }
    return total_bill;
};

exports.price_rules = price_rules;
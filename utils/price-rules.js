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
                const total_apple_tv = Items[item];
                if(total_apple_tv < 3) {
                    total_bill = total_apple_tv * PRODUCTS.apple_tv.price;
                } else {
                    total_bill = (total_apple_tv - Math.floor(total_apple_tv/3)) * PRODUCTS.apple_tv.price;
                }
            }
        }
    }
    return total_bill;
};

exports.price_rules = price_rules;
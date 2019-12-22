const { price_rules } = require('./utils/price-rules');
const { PRODUCTS } = require('./utils/products');

const Items = [];

const CalculateBill = (Products) => {
    console.log('Products > ', Products);
    price_rules(Products);
};

const AddItem = (item) => {
    // console.log(item);
    Items.push(item);
}

// add apple tv
AddItem(PRODUCTS.apple_tv);
AddItem(PRODUCTS.apple_tv);
AddItem(PRODUCTS.apple_tv);
AddItem(PRODUCTS.apple_tv);

// add macbook pro
AddItem(PRODUCTS.macbook_pro);
AddItem(PRODUCTS.macbook_pro);

// console.log('Items ', Items);

CalculateBill(Items);

exports.CalculateBill = CalculateBill;
exports.AddItem = AddItem;
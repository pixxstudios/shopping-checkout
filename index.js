const { price_rules } = require('./utils/price-rules');
const { PRODUCTS } = require('./utils/products');

const Items = [];

const CalculateBill = (Products) => {
    // console.log('Products > ', Products);
    return price_rules(Products);
};

const AddItem = (item) => {
    Items.push(item);
}

CalculateBill(Items);

exports.CalculateBill = CalculateBill;
exports.AddItem = AddItem;
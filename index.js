const { price_rules } = require('./utils/price-rules');
const { PRODUCTS } = require('./utils/products');

const Items = [];

const CalculateBill = (Products) => {
    console.log(price_rules, Products);
};

const AddItem = (item) => {
    console.log(item);
    Items.push(item);
}

AddItem(PRODUCTS.apple_tv);
AddItem(PRODUCTS.apple_tv);
AddItem(PRODUCTS.apple_tv);
AddItem(PRODUCTS.apple_tv);

console.log('Items ', Items);

CalculateBill();

exports.CalculateBill = CalculateBill;
exports.AddItem = AddItem;
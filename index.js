const { price_rules } = require('./utils/price-rules');
const { PRODUCTS } = require('./utils/products');

const Items = [];

const CalculateBill = () => {
    console.log(price_rules);
};

const AddItem = (item) => {
    console.log(item);
    Items.push(item);
}

AddItem(PRODUCTS.apple_tv.name);
AddItem(PRODUCTS.apple_tv.name);
AddItem(PRODUCTS.apple_tv.name);
AddItem(PRODUCTS.apple_tv.name);

console.log('Items ', Items);

CalculateBill();
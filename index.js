const { price_rules } = require('./utils/price-rules');

const Items = [];

const CalculateBill = (Products) => {
    return price_rules(Products);
};

const AddItem = (item) => {
    Items.push(item);
}

CalculateBill(Items);

exports.CalculateBill = CalculateBill;
exports.AddItem = AddItem;
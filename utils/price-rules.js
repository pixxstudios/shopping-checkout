const price_rules = (Products) => {
    const productsQuantity = {};
    Products.forEach(product => {
        const { sku } = product;
        if (productsQuantity.hasOwnProperty(sku)) {
            productsQuantity[sku]++;
        } else {
            productsQuantity[sku] = 1;
        }
    });
    console.log(productsQuantity);
    return productsQuantity;
};

exports.price_rules = price_rules;
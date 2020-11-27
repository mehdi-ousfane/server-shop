const fs = require('fs');
const path = require('path');

const pathProduct = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json');

const getProductsFromFile = (cb) => {
    fs.readFile(pathProduct, (err, fileContent) => {
        if (err) {
            return cb([]);
        }
        cb(JSON.parse(fileContent));
    });
};

module.exports = class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl,
        this.description = description,
        this.price = price
    }
    save() {
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFileSync(pathProduct, JSON.stringify(products));
        });
    }

    static fetchAll(cb) {
        getProductsFromFile(cb)
    }
};
const fs = require('fs');
const path = require('path');


module.exports = class Product {
    constructor(title) {
        this.title = title;
    }
    save() {
        const pathProduct = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json');
        fs.readFile(pathProduct, (err,fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFileSync(pathProduct, JSON.stringify(products));
        })
    }
    static fetchAll(cb) {
        const pathProduct = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json');
        fs.readFile(pathProduct, (err, fileContent) => {
            if (err) {
                cb([]);
            }
            cb(JSON.parse(fileContent));
        });
    }
};
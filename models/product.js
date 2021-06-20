const fs = require("fs");
const path = require("path");

const rootDir = require("../util/path");

// const products = [];
const p = path.join(rootDir, "data", "products.json");

/**
 * * this is a helper function which can be used by different methods for same operation
 * * It requires a callback to handle async operations
 * * return in if is used to stop the flow in that case.
 * * fileContent are in text format. So using parse method to convert it into array/object
 * * while writing content to file stringify method is used to convert it into text
 * * arrow function must be needed to get the instance of object using this
 */
const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
      // return [];
    }
    // return JSON.parse(fileContent);
    cb(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    // products.push(this)
    // const p = path.join(rootDir, 'data', 'products.json');
    // fs.readFile(p, (err,fileContent) => {
    //     let products = [];
    //     if(!err) {
    //         products = JSON.parse(fileContent);
    //     }
    //     products.push(this)
    //     fs.writeFile(p, JSON.stringify(products), (err) => {
    //         console.log(err);
    //     })
    // })
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    // return products;
    getProductsFromFile(cb);
  }
};

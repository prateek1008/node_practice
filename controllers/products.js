const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

/**
 * * class objects can be defiend as new ClassName calling its constructor
 * * save function will use this instance of object to save data
 */
exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

/**
 * * fetchAll method will require a callback function so that it can handle async functions otherwise products wont be fetched
 * * code inside fetchAll will only get executed when it will return produscts array.
 */
exports.getProducts = (req, res, next) => {
//   const products = Product.fetchAll();
//   res.render("shop", {
//     prods: products,
//     pageTitle: "Shop",
//     path: "/",
//   });
  Product.fetchAll(products => {
    res.render("shop", {
        prods: products,
        pageTitle: "Shop",
        path: "/",
      });
  });
};

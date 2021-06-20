const Product = require("../models/product");

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
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    pageTitle: "Your Cart",
    path: "/cart",
  });
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    pageTitle: "Your Orders",
    path: "/orders",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    pageTitle: "Checkout",
    path: "/checkout",
  });
};

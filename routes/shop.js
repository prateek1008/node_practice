// const path = require("path");

const express = require("express");

// const rootDir = require("../util/path");
// const admin = require("./admin");
const shopController = require("../controllers/shop");

const router = express.Router();

/**
 * * render function is used to tell node about the file which we want to render.
 * * It will look into the views folder or the folder we have set in app.js.
 * * So, no paths needs be to defined.
 * * Handlebar files don't do javascripts operations like greater than or equal to. We have to pass boolean types in those files. Example : hasProducts
 * * layout : false can be used to not use layouts in handlebars
 */
// router.get("/", (req, res, next) => {
// res.send("<h3>Hello from node</h3>");
// res.sendFile(path.join(__dirname, '..', 'views','shop.html'))
// console.log(admin.products);
// res.sendFile(path.join(rootDir, 'views','shop.html'))
//   const products = admin.products;
// res.render('shop',{prods: products, pageTitle: 'Shop', path: '/'});
// res.render("shop", {
//   prods: products,
//   pageTitle: "Shop",
//   path: "/",
//   hasProducts: products.length > 0,
//   productCSS: true,
//   activeShop: true,
// });
//   res.render("shop", {
//     prods: products,
//     pageTitle: "Shop",
//     path: "/",
//   });
// });

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

router.get("/cart", shopController.getCart);

router.get("/orders", shopController.getOrders);

router.get("/checkout", shopController.getCheckout);

module.exports = router;

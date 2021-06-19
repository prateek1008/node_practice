const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

/**
 * * Router is a function of express which have almost similar capabilities of rousting as express
 */
const router = express.Router();

const products = [];

/**
 * * GET,POST,etc functions directly specifies the type of action.'
 * * These functions matches the full path.
 * * redirect function of res is used to redirect the paths.
 * * sendFile takes the path of out html file and send content as response.
 * * .. indicates to go up one level.
 */
router.get("/add-product", (req, res, next) => {
  // res.send(`
  //     <form action="/admin/product" method="POST">
  //         <input type= "text" name="title">
  //         <button type="submit">
  //             Submit
  //         </button>
  //     </form>
  // `)
  // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

/**
 * * This products array can be imported in any other file. But it will hsare the same copy across all users.
 * * Only can be used where we want to update global data. Not for personal data.
 * * Otherwise, name of user A will reflect in name of user B. it works on references.
 */
router.post("/product", (req, res, next) => {
  products.push({
    title: req.body.title,
  });
  res.redirect("/");
});

exports.router = router;
exports.products = products;

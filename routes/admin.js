// const path = require("path");

const express = require("express");

// const rootDir = require("../util/path");
const adminController = require("../controllers/admin");

/**
 * * Router is a function of express which have almost similar capabilities of routing as express
 */
const router = express.Router();

/**
 * * GET,POST,etc functions directly specifies the type of action.'
 * * These functions matches the full path.
 * * redirect function of res is used to redirect the paths.
 * * sendFile takes the path of our html file and send content as response.
 * * .. indicates to go up one level.
 */
// router.get("/add-product", (req, res, next) => {
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
// res.render("add-product", {
//   pageTitle: "Add Product",
//   path: "/admin/add-product",
//   formsCSS: true,
//   productCSS: true,
//   activeAddProduct: true,
// });
//   res.render("add-product", {
//     pageTitle: "Add Product",
//     path: "/admin/add-product",
//   });
// });
router.get("/add-product", adminController.getAddProduct);

/**
 * * This products array can be imported in any other file. But it will have the same copy across all users.
 * * Only can be used where we want to update global data. Not for personal data.
 * * Otherwise, name of user A will reflect in name of user B. It works on references.
 * * request body comes from body-parser from app.js
 */

router.get("/products", adminController.getProducts);

router.post("/product", adminController.postAddProduct);

module.exports = router;

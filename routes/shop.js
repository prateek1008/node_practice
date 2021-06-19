const path = require("path")

const express = require("express");

const rootDir = require("../util/path");
const admin = require("./admin");

const router = express.Router();

/**
 * * render function is used to teel node about the file which we want to render.
 * * It will look into the views folder or the folder we have set in app.js.
 * * So, no paths needs be to defined. 
 */
router.get('/',(req,res,next) => {
    // res.send("<h3>Hello from node</h3>");
    // res.sendFile(path.join(__dirname, '..', 'views','shop.html'))
    console.log(admin.products)
    // res.sendFile(path.join(rootDir, 'views','shop.html'))
    const products = admin.products
    res.render('shop',{prods: products, pageTitle: 'Shop', path: '/'});
});

exports.router = router;
const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

/**
 * * Router is a function of express which have almost similar capabilities of rousting as express
 */
const router = express.Router();

/**
 * * GET,POST,etc functions directly specifies the type of action.'
 * * These functions matches the full path.
 * * redirect function of res is used to redirect the paths.
 * * sendFile takes the path of out html file and send content as response.
 * * .. indicates to go up one level.
 */
router.get('/add-product',(req,res,next) => {
    // res.send(`
    //     <form action="/admin/product" method="POST">
    //         <input type= "text" name="title">
    //         <button type="submit">
    //             Submit
    //         </button>
    //     </form>
    // `)
    // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/product', (req,res,next) => {
    console.log(req.body)
    res.redirect('/')
})

exports.router = router;
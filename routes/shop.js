const path = require("path")

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get('/',(req,res,next) => {
    // res.send("<h3>Hello from node</h3>");
    // res.sendFile(path.join(__dirname, '..', 'views','shop.html'))
    res.sendFile(path.join(rootDir, 'views','shop.html'))
});

exports.router = router;
/**
 * * built in module to deal with paths
 */
const path = require("path");

/**
 * * express and body-parser is a third party package
 */

const express = require("express");
const bodyParser = require("body-parser")

/**
 * * we used express router to divide differnt routes into different files
 */

const admin = require("./routes/admin");
const shop = require("./routes/shop");

const app = express();

/**
 * * use function is for all types of request(POST,GET,etc) and it does not matches full path. Hence, Generic paths should be kept at end.
 * * /admin in use is to give nested routing. The paths inside that routes will start from /admin now.
 * * chanining of different methods can be done on response. Status, headers,etc can be set like this
 * * send should be the last method in the chain.
 * * send will automatically add headers(like text/html, etc)
 * * next function is used to go to the next middleware function
 * * express.static function is used to serve files like css or js, or images from browser. We can have multiple static folders.
 * * path.join will take all the arguments and make a path depending on different operating systems.
 * * __dirname stores absolute path of the location it is used 
 */
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',admin.router);
app.use(shop.router);

app.use((req,res,next) => {
    // res.status(404).send(`
    //     <h3>
    //         Page Not Found    
    //     </h3>
    // `)
    res.status(404).sendFile(path.join(__dirname,'views','page-not-found.html'));
})

/**
 * * listen on app merges create server and listen command in a single line.
 */
app.listen(3000);
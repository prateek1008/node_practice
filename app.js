/**
 * * built in module to deal with paths
 */
const path = require("path");

/**
 * * express and body-parser is a third party package
 * * express-handlebars needs to be imported explicitly
 */

const express = require("express");
const bodyParser = require("body-parser");
// const expressHbs = require("express-handlebars")

/**
 * * we used express router to divide differnt routes into different files
 */

const admin = require("./routes/admin");
const shop = require("./routes/shop");

const app = express();

/**
 * * Install pug, express-handlebars and ejs using npm. It is a templating engine to render dynamic html content.
 * * We need to set view engine globally using set function of express. It will identify pug, handlebars or ejs as templating engine
 * * By default, it search in views folder which we are already using. In case of any other folder, we need to specify views folder. Right now, it can be neglected.
 * * app.engine registers this as the templating engine. First argument can be anything but it will be the extension of handlebars files in views folder.
 * * expressHbs should be executed here and not to be passed as reference
 * * we need to explicitly define layouts settings as arguments of expressHbs.
 * * views/layout/ is the default location and need not to be defined.
 * * extName for layouts should be defined here otherwise it will search for .handlebar extension
 * * pug and ejs are already known engines and therefore no engines needs to br created for that.
 */

// app.engine('hbs',expressHbs({layoutsDir: 'views/layout/',defaultLayout: 'main-layout',extname: 'hbs'}));
// app.set('view engine', 'hbs');

// app.set('view engine', 'pug');
app.set("view engine", "ejs");
// app.set('views', 'views');

/**
 * * use function is for all types of request(POST,GET,etc) and it does not matches full path. Hence, Generic paths should be kept at end.
 * * /admin in use is to give nested routing. The paths inside that routes will start from /admin now.
 * * chaining of different methods can be done on response. Status, headers,etc can be set like this
 * * send should be the last method in the chain.
 * * send will automatically add headers(like text/html, etc)
 * * next function is used to go to the next middleware function
 * * express.static function is used to serve files like css or js, or images from browser. We can have multiple static folders.
 * * path.join will take all the arguments and make a path depending on different operating systems.
 * * __dirname stores absolute path of the location it is used
 * * we can pass dynamic data like pageTitle as an object to pug/handlebar/ejs file
 * * object variable path is created for ejs otherrwise it will throw an javascript error of unknown variable
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", admin.router);
app.use(shop.router);

app.use((req, res, next) => {
  // res.status(404).send(`
  //     <h3>
  //         Page Not Found
  //     </h3>
  // `)
  // res.status(404).sendFile(path.join(__dirname,'views','page-not-found.html'));
  res
    .status(404)
    .render("page-not-found", { pageTitle: "Page Not Found", path: "" });
});

/**
 * * listen on app merges create server and listen command in a single line.
 */
app.listen(3000);

/**
    * * It is a core module which needs not to be installed externally. Shipped with node.
*/
const http = require("http");

/**
 * * It is a local import of routes file which have all the logic.
 * * That logic can be written here but to have leaner code we did this.
 * * Including .js extension while importing does not harm but is is already done by node. SO, we can avoid it. 
 */
const routes = require("./routes")

/**
 * * There are certain ways to make functions in JS.
 * * 1. Explicit named function using keyword function
 * * 2. Anonymous function using keyword function
 * * 3. Anonymous function using arrow functions
 */

// 1. Way 1
// function rqListener(req,res) {}
// http.createServer(rqListener)

// 2. Way 
// http.createServer(function(req,res) {})

// Way 3
// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method, req.headers);
/**
 * * For hard exiting of event loops, this can be called.
 * * It is not a good practive to vcall it. 
 * * Node eventually called it after completion of events.
 */
//   process.exit();

// })

console.log(routes.someText)

/**
 * * Creation of server and passing exported routes handler to move ahead.
 */
const server = http.createServer(routes.handler)

/**
 * * This will keep the server listen to the actions.
 * * 3000 is the port number we have given. It can be some different or 80 in production.
 */
server.listen(3000);

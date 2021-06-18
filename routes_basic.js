/**
 * * fs module is used for handling files.
 */
const fs = require("fs");

/**
 * * This will be exported
 */
const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;

    /**
     * * res.write can be used to write different lines of html to send it as a response.
     * * response can be send before res.end
     * * action in form redirects the page on submit event of button.
     * * method on form tells what kind of request is generated. It can be POST,GET,etc.
     * * It will take the data with field name as name of input, "message" in below case
     * * Return res.end otherwise if will flow for the next lines and there might be some sending of response which can cause errors.
     */

    if (url === "/") {
      res.write("<html>");
      res.write("<head><title>Enter message</title>");
      res.write("</head>");
      res.write(
        '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
      );
      res.write("</html>");
      return res.end();
    }
    /**
     * * req.on starts an event. data comes in chunks in node.
     * * once all data came, it will end the process and goes for "end" event.
     * * Buffer takes the data and concat merges the data and toString brings it in readable format
     * * Events wont run synchronously. It is stored and run later. So need to return it so that program flow will stop.
     */
    if (url === "/message" && method === "POST") {
      const body = [];
      req.on("data", (chunk) => {
        console.log(chunk);
        body.push(chunk);
      });
      return req.on("end", () => {
        const parsedBody = Buffer.concat(body).toString();
    
        const message = parsedBody.split("=")[1];

        /**
         * * writeFileSync works on file synchronously and it stopped the process. It should be avoided.
         * * writeFile brings that to worker pool so that it can be run on different threads. It also has anonymous function as third argument to proceed with further actions and error handling.
         */

      //   fs.writeFileSync("message.txt", message); //Block the code path
      fs.writeFile('message.txt',message, (err) => {
      res.writeHead(302, { Location: "/" });
      return res.end();
          
      })
      });
      // 1. Can be done in a single step to specify status code and headers
      // res.writeHead(302, { Location: "/" });
    
      // Two steps to set status code and headers
      // res.statusCode = 302;
      // res.setHeader('Location', '/');
      // return res.end();
    }
    
    // Will get run in case of another url match
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title>");
    res.write("</head>");
    res.write("<body><h1>Hello from my node server</h1></body>");
    res.write("</html>");
    res.end();
}

// differnt ways to do export

//1. if we have single thing to export
// module.exports = requestHandler

// module.exports = {
//     handler : requestHandler,
//     someText : "Hard coded text"
// }

// module.exports.handler = requestHandler;
// module.exports.someText = "Some Hard Coded Text";

// short hand
exports.handler = requestHandler;
exports.someText = "Hard coded text"
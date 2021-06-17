const http = require("http");

const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(
            `
            <html>
                <head>
                    <title>
                        Greetings
                    </title>
                </head>
                <body>
                    <h2>
                        Hello, Good Evening
                    </h2>
                    <form action="/create-user" method="POST">
                        <input name="userName" type="text">
                        <button type"submit">
                            Send
                        </button>
                    </form>
                </body>
            </html>
            `
        );

        return res.end();
    }
    if(url === '/users') {
        res.setHeader('Content-Type','text/html');
        res.write("<html><head><title>Users</title></head><body><ul><li>User 1</li><li>User 2</li></ul></body></html>");
        return res.end();
    }
    if(url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split("=")[1];
            console.log(username);
            res.writeHead(302, {'Location': '/'});
            return res.end();
        })
    }
})

server.listen(3000);
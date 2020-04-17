const { port } = require('./config');

const http = require("http"),
    router = require("./routes");

http.createServer(router.handle).listen(port);
console.log(`The server has started and is listening on port number: ${port}`);

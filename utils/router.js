const httpStatus = require("http-status-codes"),
    contentTypes = require("./contentTypes"),
    routes = {
        "GET": {},
        "POST": {},
    };

const handleRequest = (req, res) => {
    try {
        if (req.url.length > 1 && req.url.slice(-1) === '/') {
            req.url = req.url.slice(0, -1);
        }
        if (routes[req.method][req.url]) {
            routes[req.method][req.url](req, res);
        } else {
            res.writeHead(httpStatus.NOT_FOUND, contentTypes.html);
            res.end("<h1>No such file exists</h1>");
        }
    } catch (ex) {
        console.log("error: "+ ex);
    }
};

const addGetRoute = (uri, callback) => {
    routes["GET"][uri] = callback;
};

const addPostRoute = (uri, callback) => {
    routes["POST"][uri] = callback;
}

exports.handle = handleRequest;

exports.get = addGetRoute;

exports.post = addPostRoute;

const httpStatusCodes = require("http-status-codes"),
    contentTypes = require("./../../utils/contentTypes");

const render = (req, res) => {
    res.writeHead(httpStatusCodes.OK, contentTypes.html);
    res.end("<h1>Contact Confirm Page</h1>");
};

module.exports.render = render;
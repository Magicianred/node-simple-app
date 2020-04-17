const httpStatusCodes = require("http-status-codes"),
    contentTypes = require("./../../utils/contentTypes");

const render = (req, res) => {
    // TO DO
    res.writeHead(httpStatusCodes.OK, contentTypes.html);
    res.end("<h1>Contact Confirm Page - POST</h1>");
};

module.exports.render = render;
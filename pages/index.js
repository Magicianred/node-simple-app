const fs = require('fs'),
    vash = require('vash'),
    MarkdownIt = require('markdown-it'),
    httpStatusCodes = require("http-status-codes"),
    contentTypes = require("../utils/contentTypes");

const { 
    appName,
    appVersion,
    templatePath,
} = require('./../config');

let mdText = undefined;
let viewTemplate = undefined;

let error = undefined;

let template = undefined;
let output = undefined;

try {
    // import markdown file
    const md = new MarkdownIt();
    const data = fs.readFileSync(`${__dirname}/../data/pages/home.md`, 'utf8');
    mdText = md.render(data);

    // import view file
    viewTemplate = fs.readFileSync(`${__dirname}/..${templatePath}/home.js`, 'utf8');
    template = vash.compile(viewTemplate);
    output = template({ appName, appVersion });
} catch (err) {
    console.log(err);
    error = err;
}

const render = (req, res) => {
    if (error) {
        res.writeHead(httpStatusCodes.INTERNAL_SERVER_ERROR, contentTypes.html);
        res.end("<h1>An error is occurred</h1>");
    }
    res.writeHead(httpStatusCodes.OK, contentTypes.html);
    res.end(output);
};

module.exports.render = render;

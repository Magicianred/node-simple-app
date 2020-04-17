const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT,
  appName: process.env.appName,
  appVersion: process.env.appVersion,
  templatePath: process.env.templatePath,
};
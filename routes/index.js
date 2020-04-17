const httpStatusCodes = require("http-status-codes"),
    contentTypes = require("../utils/contentTypes"),
    router = require("./../utils/router");
    aboutSection = require("./aboutSection"),
    contactSection = require("./contactSection");

const indexPage = require("./../pages");

router.get('/', indexPage.render);

/* TODO 
    automatics routing based on files in /pages 
*/

/* add sections */
aboutSection.setRoutes(router);
contactSection.setRoutes(router);

module.exports = router;
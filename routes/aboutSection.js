const indexPage = require("./../pages/about"),
    whoArePage = require("./../pages/about/whoare"),
    whereArePage = require("./../pages/about/whereare");

exports.setRoutes = (router) => {
    /* add routes */
    router.get('/about', indexPage.render);
    router.get('/about/whoare', whoArePage.render);
    router.get('/about/whereare', whereArePage.render);
};

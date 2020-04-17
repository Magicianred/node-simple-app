const indexPage = require("./../pages/contact"),
    confirmPost = require("./../pages/contact/confirm-post"),
    confirmPage = require("./../pages/contact/confirm");

const routes = (router) => {
    /* add routes */
    router.get('/contact', indexPage.render);
    router.get('/contact/confirm', confirmPage.render);
    router.post('/contact', confirmPost.render);
}

exports.setRoutes = routes;

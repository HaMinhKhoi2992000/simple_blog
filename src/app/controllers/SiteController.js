const Article = require('../models/Articles');

class SiteController {
    //[GET] /
    index(req, res, next) {
        Article.find({})
            .lean()
            .then((articles) => {
                res.render('home', { articles });
            })
            .catch(next);
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

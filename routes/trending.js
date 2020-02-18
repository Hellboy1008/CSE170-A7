/*
 * GET category page for trending.
 */

var data = require('../public/json/trending.json');

exports.view = function(req, res) {
    res.render('trending', data);

};
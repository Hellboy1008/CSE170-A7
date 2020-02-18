/*
 * GET category page for kids.
 */

var data = require('../public/json/kids.json');

exports.view = function(req, res) {
    res.render('kids', data);

};
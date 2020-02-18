/*
 * GET category page for new releases.
 */

var data = require('../public/json/new_releases.json');

exports.view = function(req, res) {
    res.render('new_releases', data);

};
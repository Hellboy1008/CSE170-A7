/*
 * GET category page for family.
 */

var data = require('../public/json/family.json');

exports.view = function(req, res) {
    res.render('family', data);

};
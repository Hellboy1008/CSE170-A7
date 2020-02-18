/*
 * GET category page for card.
 */

var data = require('../public/json/card.json');

exports.view = function(req, res) {
    res.render('card', data);

};
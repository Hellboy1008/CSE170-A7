/*
 * GET category page for party.
 */

var data = require('../public/json/party.json');

exports.view = function(req, res) {
    res.render('party', data);

};
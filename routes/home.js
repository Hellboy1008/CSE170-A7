/*
 * GET home page.
 */

var user_data = require('../public/json/users.json');

exports.view = function(req, res) {
    name = "Anonymous";
    user_data.users.push({ "name": name });
    res.render('home', user_data.users[0]);
};
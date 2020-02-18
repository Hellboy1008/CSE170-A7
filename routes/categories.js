/*
 * GET category pages
 */

var data_kids = require('../public/json/kids.json');
var data_new_releases = require('../public/json/new_releases.json');
var data_party = require('../public/json/party.json');
var data_trending = require('../public/json/trending.json');
var data_card = require('../public/json/card.json');
var data_family = require('../public/json/family.json');

exports.viewKids = function(req, res) {
    res.render('categories', data_kids);
};

exports.viewNewReleases = function(req, res) {
    res.render('categories', data_new_releases);
};

exports.viewParty = function(req, res) {
    res.render('categories', data_party);
};

exports.viewTrending = function(req, res) {
    res.render('categories', data_trending);
};

exports.viewCard = function(req, res) {
    res.render('categories', data_card);
};

exports.viewFamily = function(req, res) {
    res.render('categories', data_family);
};
/*
 * GET game page for all games
 */

var data_kids = require('../public/json/kids.json');
var data_new_releases = require('../public/json/new_releases.json');
var data_party = require('../public/json/party.json');
var data_trending = require('../public/json/trending.json');
var data_card = require('../public/json/card.json');
var data_family = require('../public/json/family.json');

exports.viewTheSettlersOfCatan = function(req, res) {
    res.render('game', data_card.games[0]);
};

exports.viewExplodingKittens = function(req, res) {
    res.render('game', data_card.games[1]);
};

exports.viewMonopoly = function(req, res) {
    res.render('game', data_card.games[2]);
};

exports.viewCoup = function(req, res) {
    res.render('game', data_card.games[3]);
};
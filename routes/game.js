/*
 * GET game page for all games
 */

var data_kids = require('../public/json/kids.json');
var data_new_releases = require('../public/json/new_releases.json');
var data_party = require('../public/json/party.json');
var data_trending = require('../public/json/trending.json');
var data_card = require('../public/json/card.json');
var data_family = require('../public/json/family.json');

exports.viewAuztralia = function(req, res) {
    res.render('game', data_new_releases.games[0]);
};

exports.viewCarcassonne = function(req, res) {
    res.render('game', data_trending.games[0]);
};

exports.viewCardsAgainstHumanity = function(req, res) {
    res.render('game', data_card.games[0]);
};

exports.viewClue = function(req, res) {
    res.render('game', data_kids.games[0]);
};

exports.viewCodenames = function(req, res) {
    res.render('game', data_family.games[0]);
};

exports.viewCoup = function(req, res) {
    res.render('game', data_party.games[0]);
};

exports.viewDeception = function(req, res) {
    res.render('game', data_party.games[1]);
};

exports.viewDixit = function(req, res) {
    res.render('game', data_party.games[2]);
};

exports.viewEverdell = function(req, res) {
    res.render('game', data_new_releases.games[1]);
};

exports.viewExplodingKittens = function(req, res) {
    res.render('game', data_card.games[1]);
};

exports.viewMonopoly = function(req, res) {
    res.render('game', data_kids.games[1]);
};

exports.viewOneNightUltimateWerewolf = function(req, res) {
    res.render('game', data_trending.games[1]);
}

exports.viewPandemic = function(req, res) {
    res.render('game', data_family.games[1]);
}

exports.viewRoot = function(req, res) {
    res.render('game', data_new_releases.games[2]);
}

exports.viewScrabble = function(req, res) {
    res.render('game', data_kids.games[2]);
}

exports.viewSecretHitler = function(req, res) {
    res.render('game', data_party.games[3]);
}

exports.viewSequence = function(req, res) {
    res.render('game', data_family.games[2]);
}

exports.viewTicketToRide = function(req, res) {
    res.render('game', data_trending.games[2]);
}

exports.viewTheGameOfLife = function(req, res) {
    res.render('game', data_kids.games[3]);
};

exports.viewTheReckoners = function(req, res) {
    res.render('game', data_new_releases.games[3]);
};

exports.viewTheResistance = function(req, res) {
    res.render('game', data_card.games[2]);
};

exports.viewTheSettlersOfCatan = function(req, res) {
    res.render('game', data_family.games[3]);
};

exports.viewUNO = function(req, res) {
    res.render('game', data_card.games[3]);
};

exports.viewWhatDoYouMeme = function(req, res) {
    res.render('game', data_trending.games[3]);
};
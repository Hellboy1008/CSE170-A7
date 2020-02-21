/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var home = require('./routes/home');
var categories = require('./routes/categories');
var contact = require('./routes/contact');
var game = require('./routes/game');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', index.view);
app.get('/home', home.view);
app.get('/contact', contact.view);

// list of all categories
app.get('/new_releases', categories.viewNewReleases);
app.get('/trending', categories.viewTrending);
app.get('/party', categories.viewParty);
app.get('/family', categories.viewFamily);
app.get('/card', categories.viewCard);
app.get('/kids', categories.viewKids);

// list of all games
app.get('/Auztralia', game.viewAuztralia);
app.get('/Carcassonne', game.viewCarcassonne);
app.get('/Cards_Against_Humanity', game.viewCardsAgainstHumanity);
app.get('/Clue', game.viewClue);
app.get('/Codenames', game.viewCodenames);
app.get('/Coup', game.viewCoup);
app.get('/Deception', game.viewDeception);
app.get('/Dixit', game.viewDixit);
app.get('/Everdell', game.viewEverdell);
app.get('/Exploding_Kittens', game.viewExplodingKittens);
app.get('/Monopoly', game.viewMonopoly);
app.get('/One_Night_Ultimate_Werewolf', game.viewOneNightUltimateWerewolf)
app.get('/Pandemic', game.viewPandemic);
app.get('/Root', game.viewRoot);
app.get('/Scrabble', game.viewScrabble);
app.get('/Secret_Hitler', game.viewSecretHitler);
app.get('/Sequence', game.viewSequence);
app.get('/Ticket_To_Ride', game.viewTicketToRide);
app.get('/The_Game_Of_Life', game.viewTheGameOfLife);
app.get('/The_Reckoners', game.viewTheReckoners);
app.get('/The_Resistance', game.viewTheResistance);
app.get('/The_Settlers_Of_Catan', game.viewTheSettlersOfCatan);
app.get('/UNO', game.viewUNO);
app.get('/What_Do_You_Meme', game.viewWhatDoYouMeme);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
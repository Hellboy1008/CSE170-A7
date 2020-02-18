/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var home = require('./routes/home');
var new_releases = require('./routes/new_releases');
var trending = require('./routes/trending');
var party = require('./routes/party');
var family = require('./routes/family');
var card = require('./routes/card');
var kids = require('./routes/kids');
var contact = require('./routes/contact');
var game_TSOC = require('./routes/game_TSOC');
var game_Exploding_Kittens = require('./routes/game_Exploding-Kittens');
var game_Monopoly = require('./routes/game_Monopoly');
var game_Coup = require('./routes/game_Coup');
// Example route
// var user = require('./routes/user');

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
app.get('/new_releases', new_releases.view);
app.get('/trending', trending.view);
app.get('/party', party.view);
app.get('/family', family.view);
app.get('/card', card.view);
app.get('/kids', kids.view);
app.get('/contact', contact.view);
app.get('/The_Settlers_Of_Catan', game_TSOC.view);
app.get('/Exploding_Kittens', game_Exploding_Kittens.view);
app.get('/Monopoly', game_Monopoly.view);
app.get('/Coup', game_Coup.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
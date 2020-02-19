// facebook login check

window.fbAsyncInit = function() {
    Parse.FacebookUtils.init({ // this line replaces FB.init({
        appId: '178284870069060', // Facebook App ID
        cookie: true, // enable cookies to allow Parse to access the session
        xfbml: true, // initialize Facebook social plugins on the page
        version: 'v6.0' // point to the latest Facebook Graph API version, found in FB's App dashboard.
    });
    checkLoginState();
};

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
    loadName();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    // get list of games and urls
    gameList = gameList();
    urlList = urlList();
    console.log(gameList);
    console.log(urlList);

    // event listener for search button
    $('.search-btn').click(function(e) {
        var userinput = document.getElementById("search-bar").value;

        // find game
        var found = searchGame(userinput, gameList, urlList);
        if (found != null) {
            window.location.href = found;
        } else {
            window.alert("Game was not found! Please make sure you spelled the game correctly. If so, the game most likely does not exist in our database yet. Feel free to contact us if you would like the game to be added to the database.");
            location.reload();
        }
    });
}

/*
 * Function that loads user's name on screen
 */
function loadName() {
    name = localStorage.getItem('user-name');
    console.log(name);
    $('.user-name').text('Welcome back, ');
    $('.user-name').append(name);
    $('.user-name').append('!');
}

/*
 * Function that searches a game on the server
 */
function searchGame(game, gameList, urlList) {
    // trim user input
    game.trim();
    game = game.toLowerCase();

    // find game
    for (i = 0; i < gameList.length; i++) {
        if (game == gameList[i]) {
            return urlList[i];
        }
    }
    return null;
}

/*
 * Function gets list of games
 */

function gameList() {
    gameList = [];
    $.getJSON("json/card.json", function(data) {
        $.each(data.games, function(key, val) {
            gameList.push(val.name.toLowerCase());
        });
    });
    $.getJSON("json/family.json", function(data) {
        $.each(data.games, function(key, val) {
            gameList.push(val.name.toLowerCase());
        });
    });
    $.getJSON("json/kids.json", function(data) {
        $.each(data.games, function(key, val) {
            gameList.push(val.name.toLowerCase());
        });
    });
    $.getJSON("json/new_releases.json", function(data) {
        $.each(data.games, function(key, val) {
            gameList.push(val.name.toLowerCase());
        });
    });
    $.getJSON("json/party.json", function(data) {
        $.each(data.games, function(key, val) {
            gameList.push(val.name.toLowerCase());
        });
    });
    $.getJSON("json/trending.json", function(data) {
        $.each(data.games, function(key, val) {
            gameList.push(val.name.toLowerCase());
        });
    });
    return gameList;
}

/*
 * Function gets list of url for games
 */

function urlList() {
    urlList = [];
    $.getJSON("json/card.json", function(data) {
        $.each(data.games, function(key, val) {
            urlList.push(val.viewURL);
        });
    });
    $.getJSON("json/family.json", function(data) {
        $.each(data.games, function(key, val) {
            urlList.push(val.viewURL);
        });
    });
    $.getJSON("json/kids.json", function(data) {
        $.each(data.games, function(key, val) {
            urlList.push(val.viewURL);
        });
    });
    $.getJSON("json/new_releases.json", function(data) {
        $.each(data.games, function(key, val) {
            urlList.push(val.viewURL);
        });
    });
    $.getJSON("json/party.json", function(data) {
        $.each(data.games, function(key, val) {
            urlList.push(val.viewURL);
        });
    });
    $.getJSON("json/trending.json", function(data) {
        $.each(data.games, function(key, val) {
            urlList.push(val.viewURL);
        });
    });
    return urlList;
}
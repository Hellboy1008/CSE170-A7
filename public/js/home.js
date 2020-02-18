window.fbAsyncInit = function() {
    Parse.FacebookUtils.init({ // this line replaces FB.init({
        appId: '178284870069060', // Facebook App ID
        cookie: true, // enable cookies to allow Parse to access the session
        xfbml: true, // initialize Facebook social plugins on the page
        version: 'v6.0' // point to the latest Facebook Graph API version, found in FB's App dashboard.
    });
    checkLoginState();
};

name = localStorage.getItem('user-name');
console.log(name);

$(window).on("load", function() {
    $('.user-name').text('Welcome back, ');
    $('.user-name').append(name);
    $('.user-name').append('!');
});
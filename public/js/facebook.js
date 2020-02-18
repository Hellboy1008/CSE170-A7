function checkLoginState() {
    for (i = 0; i < 5; i++) {
        loginFB();
    }
}

function loginFB() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

function statusChangeCallback(response) {
    console.log('Facebook login status changed.');
    console.log(response);
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        console.log('Successfully logged in with Facebook');
        FB.api('/me?fields=name,first_name,picture.width(480)', addUser);
    }
    loginSuccessful();
}

function addUser(response) {
    localStorage.setItem('user-name', response.name);
    console.log(response.name);
}

function loginSuccessful() {
    window.location.href = '/home';
}
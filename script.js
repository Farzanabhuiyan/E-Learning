// Smooth scroll effects for elements appearing on scroll
function scrollAppear() {
    var introText = document.querySelector('.side-text');
    var sideImage = document.querySelector('.sideImage');
    var screenPosition = window.innerHeight / 1.2;

    if (introText.getBoundingClientRect().top < screenPosition) {
        introText.classList.add('side-text-appear');
    }
    if (sideImage.getBoundingClientRect().top < screenPosition) {
        sideImage.classList.add('sideImage-appear');
    }
}

window.addEventListener('scroll', scrollAppear);

// Toggle navigation menu in mobile mode
function switchTAB() {
    var listSwitch = document.getElementById("list-switch");
    var searchSwitch = document.getElementById("search-switch");

    if (listSwitch.style.display === "grid") {
        listSwitch.style.display = "none";
        searchSwitch.style.display = "none";
    } else {
        listSwitch.style.display = "grid";
        listSwitch.style.height = "50vh";
        searchSwitch.style.display = "block";
    }
}

// Switching between login and register forms
function register() {
    var loginForm = document.getElementById("login");
    var registerForm = document.getElementById("register");
    var button = document.getElementById("btn");
    var otherOptions = document.getElementById("other");
    var regText = document.getElementById("reg");
    var logText = document.getElementById("log");

    loginForm.style.left = "-400px";
    registerForm.style.left = "50px";
    button.style.left = "110px";
    otherOptions.style.visibility = "hidden";
    regText.style.color = "#fff";
    logText.style.color = "#000";
}

function login() {
    var loginForm = document.getElementById("login");
    var registerForm = document.getElementById("register");
    var button = document.getElementById("btn");
    var otherOptions = document.getElementById("other");
    var regText = document.getElementById("reg");
    var logText = document.getElementById("log");

    loginForm.style.left = "50px";
    registerForm.style.left = "450px";
    button.style.left = "0px";
    otherOptions.style.visibility = "visible";
    logText.style.color = "#fff";
    regText.style.color = "#000";
}

// Checkbox handling for submit button activation
function goFurther() {
    var submitButton = document.getElementById('btnSubmit');
    if (document.getElementById("chkAgree").checked) {
        submitButton.style.background = 'linear-gradient(to right, #FA4B37, #DF2771)';
    } else {
        submitButton.style.background = 'lightgray';
    }
}

// Redirect to Google sign-in
//function google() {
    //window.open("https://accounts.google.com/signin", "_blank");
//}

// Quiz navigation
function quizt(frame) {
    for (var i = 1; i <= 11; i++) {
        document.getElementById('f' + i).style.display = 'none';
    }
    document.getElementById('f' + frame).style.display = 'block';
}

// Start the quiz
function startquiz() {
    document.getElementById('title').style.display = 'none';
    document.getElementById('panel').style.display = 'inline-flex';
    document.getElementById('left').style.display = 'block';
    document.getElementById('right').style.display = 'block';
}

// Image display logic
function display(n) {
    for (var i = 1; i <= 4; i++) {
        document.getElementById('img' + i).style.display = 'none';
        document.getElementById('s' + i).style.background = '#DF2771';
        document.getElementById('s' + i).style.color = '#FFF';
    }
    document.getElementById('img' + n).style.display = 'block';
    document.getElementById('s' + n).style.background = '#E5E8EF';
    document.getElementById('s' + n).style.color = '#DF2771';
}

// Toggle side menu
function sideMenu(side) {
    var menu = document.getElementById('side-menu');
    if (side === 0) {
        menu.style.transform = 'translateX(0vh)';
        menu.style.position = 'fixed';
    } else {
        menu.style.transform = 'translateX(-100%)';
    }
}



// Call Google API initialization on page load
window.onload = function() {
    initGoogleSignIn();
};


function initGoogleSignIn() {
    gapi.load('auth2', function() {
        gapi.auth2.init({
            client_id: '74157093807-a62cs7trpp70f2p8kt3jst1r1klgsqm4.apps.googleusercontent.com'
        });
    });
}

function googleSignIn() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn().then(function(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId());
        console.log('Full Name: ' + profile.getName());
        console.log('Email: ' + profile.getEmail());
    }).catch(function(error) {
        console.error('Google Sign-In failed:', error);
    });
}

// Ensure this is called when the page loads
window.onload = function() {
    initGoogleSignIn();
};

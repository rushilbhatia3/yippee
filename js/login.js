function setCookie (name, value) {
    document.cookie = name + "=" + value + ";";
}

function getCookie (name) {
    var searchName = name + "=";	
                                
    var decodedCookie = decodeURIComponent (document.cookie);
    var carray = decodedCookie.split(';');		
                        
    var i, oneCookie;

        //document.write("array length: " + carray.length + "<br>");
    for (i = 0; i < carray.length; i++) {
            oneCookie = carray[i];			
    while (oneCookie.charAt(0) == ' ') {
        oneCookie = oneCookie.substring(1);
    }
    if (oneCookie.indexOf(searchName) == 0) {
        return oneCookie.substring (searchName.length, oneCookie.length);
    }
    }
    return ""; 
}

function delCookie (name) {
    document.cookie = name + "=;";
}

var elementClicked;
var logged;

function logIn() {

    if (!logged) {
        $("#loginEnv").css("display", "grid");
        $("#loginEnv").hide();
        $("#loginEnv").fadeIn();
    } else {
        logOut();
    }
    
}

function closeLogIn(){

    if(!elementClicked) {
        $("#loginEnv").fadeOut();
        setTimeout(function() {
            $("#loginEnv").css("display", "none");
        }, 1000); 
    }

    elementClicked = false;

}

function account() {

    $('svg').remove();
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    $("#loginIcon").append( svg );
    $('svg').attr({height:50, width: 50});

    var circle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var circle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    $('svg').append(circle1);
    $('svg').append(circle2);
    $('svg').append(path);

    var color = "";

    if (getCookie("color") == "") {
        var rand = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f' ];
        color = '#' + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)];

        setCookie("color", color);

    } else {
        color = getCookie("color");
    }

    $(circle1).attr({cx:25, cy:25, r:20, stroke:"white", strokeWidth:1, fill:color});
    $(circle2).attr({cx:25, cy:20, r:7.5, stroke:"white", strokeWidth:1, fill:"lightgray"});
    $(path).attr({d:"M 16 42.5 q 9 -22.5 18 0", stroke:"white", strokeWidth:1, fill:"lightgray"});

    $("#iconText").text("logout   " + getCookie("username"));

}

function completeLogin() {

    let username = $("#username").val();
    let password = $("#password").val();

    console.log("username: " + username + "\npassowrd: " + password);

    if (username != "" && password != "" ) {

        if ( ( username == "Joe" && password == "joe123" ) || ( username == "Jane" && password == "jane999" ) ) {

            setCookie("username", username);
            logged = true;

            account();

            closeLogIn();

        } else {
            alert("username and password cannot be matched!");
        }
    } else {
        alert("Username and Password must be entered.");
    }
}

function logOut() {

    logged = false;

    $('svg').remove();
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    $("#loginIcon").append( svg );
    $('svg').attr({height:50, width: 50});

    var circle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var circle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    $('svg').append(circle1);
    $('svg').append(circle2);
    $('svg').append(path);

    $(circle1).attr({cx:25, cy:25, r:20, stroke:"white", strokeWidth:1, fill:"gray"});
    $(circle2).attr({cx:25, cy:20, r:7.5, stroke:"white", strokeWidth:1, fill:"lightgray"});
    $(path).attr({d:"M 16 42.5 q 9 -22.5 18 0", stroke:"white", strokeWidth:1, fill:"lightgray"});

    $("#iconText").text("login");

    delCookie("username");
    delCookie("color");

}

function buttons() {
        $("#mail").click(pageNotExist);
        $("#fotoFan").click(function() { if(logged){window.location.href = "./fotofan.php";}else{logIn();} } )
        $("#drive").click(pageNotExist);
        $("#GPS").click(pageNotExist);
        $("#games").click(pageNotExist);
        $("#food").click(pageNotExist);
        $("#finance").click(pageNotExist);
        $("#browser").click(pageNotExist);
        $(".searchBtn").click(pageNotExist);
}

function pageNotExist() {
    if (logged) {
        window.location.href = "./404.html";
    } else {
        logIn();
    }
}

function loader() {

    if (getCookie("username") == "") {
        logged = false;
    } else {
        account();
        logged = true;
    }

    $("#login").click(function(){
        elementClicked = true;
    });
    
    $("#loginIcon").click(logIn);
    $("#loginEnv").click(closeLogIn);

    $("#loginSubmit").click(completeLogin);

    buttons();
}

window.onload = loader;
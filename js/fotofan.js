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

function user() {
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

    var color = getCookie("color");

    $(circle1).attr({cx:25, cy:25, r:20, stroke:"white", strokeWidth:1, fill:color});
    $(circle2).attr({cx:25, cy:20, r:7.5, stroke:"white", strokeWidth:1, fill:"lightgray"});
    $(path).attr({d:"M 16 42.5 q 9 -22.5 18 0", stroke:"white", strokeWidth:1, fill:"lightgray"});

    $("#iconText").text("logout   " + getCookie("username"));
}

function loadCarousel(){
    $('#myCarousel').carousel({
        interval: 10000
      })
          
    $('.carousel .carousel-item').each(function(){
        var minPerSlide = 3;
        var next = $(this).next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
              
        for (var i=0;i<minPerSlide;i++) {
          next=next.next();
          if (!next.length) {
            next = $(this).siblings(':first');
          }
                  
          next.children(':first-child').clone().appendTo($(this));
        }
    });     
      
    $(".carousel-item:first").addClass("active");
}

function mainImage() {
    var url = $(".img-fluid:first").attr('src');
    var name = $(".img-fluid:first").attr('alt');
    var country = $(".img-fluid:first").attr('country');
    var state = $(".img-fluid:first").attr('state');
    var description = $(".img-fluid:first").attr('description');
    var date = $(".img-fluid:first").attr('date');

    $("#image").attr({src:url, alt:name});
    $("#name").html(name);
    $("#country").html(country);
    $("#state").html(state);
    $("#description").html(description);
    $("#date").html("Last updated on: " + date);
}

function logOut() {
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

    window.location.href = "./yippee.html";
}

function loader() {

    user();

    loadCarousel();

    mainImage();

    $("#loginIcon").click(logOut);

    $(".col-lg-2").click(function() {
        var url = $(this).children('img').attr('src');
        var name = $(this).children('img').attr('alt');
        var country = $(this).children('img').attr('country');
        var state = $(this).children('img').attr('state');
        var description = $(this).children('img').attr('description');
        var date = $(this).children('img').attr('date');


        $("#image").attr({src:url, alt:name});
        $("#name").html(name);
        $("#country").html(country);
        $("#state").html(state);
        $("#description").html(description);
        $("#date").html("Last updated on: " + date);
    });

    $(".photos").click(function() {
        var url = $(this).children('img').attr('src');
        var name = $(this).children('img').attr('alt');
        var country = $(this).children('img').attr('country');
        var state = $(this).children('img').attr('state');
        var description = $(this).children('img').attr('description');
        var date = $(this).children('img').attr('date');


        $("#image").attr({src:url, alt:name});
        $("#name").html(name);
        $("#country").html(country);
        $("#state").html(state);
        $("#description").html(description);
        $("#date").html("Last updated on: " + date);
    });
    
}

window.onload = loader;
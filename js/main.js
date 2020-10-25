/* -------------------------------------------------------
   Function for getting weather information
   ------------------------------------------------------- */

function weatherBalloon() {
  var key = '1ca778f3b318864a0906e94aeaa85b2f' ;
  var lat = '42.434719';
  var lon = '-83.985001';
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=' + key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    drawWeather(data);
    console.log(data);
  })
  .catch(function() {
    // catch any errors
  });
}


/* -------------------------------------------------------
   Function for display weather information
   ------------------------------------------------------- */

function drawWeather( d ) {

  // placeholder div for testing output
  //The landing page
  $('.weather h1').html( convertTemp(d.current.temp) + '<span>&deg;</span>' );
  $('.weather p').html( printMessage(d.current.weather[0].description ));
  $('.current .currently').html( printImage(d.daily[0].weather[0].description));
  

//Details of a day in hell
 $('.intro-weather h6').html( printImage(d.daily[0].weather[0].description));
 $('.intro-weather .high').html( convertTemp(d.daily[0].temp.max)+ '<span>&deg;</span>');
 $('.intro-weather .low').html( convertTemp(d.daily[0].temp.min)+ '<span>&deg;</span>');
 $('.intro-weather h3').html( convertTime(d.current.dt) );
 $('.intro-weather h5').html( convertTime(d.current.sunrise) );
 $('.intro-weather h5').html( convertTime(d.current.sunset) );

 //hourly weather //hour 1
 $('.intro-weather .hourly .hour0 .hour00').html( convertTemp(d.hourly[0].temp)+ '<span>&deg;</span>' );
 $('.intro-weather .hourly .hour0 .icon').html( printGraphic(d.hourly[0].weather[0].description));
 //$('.intro-weather .hourly .hour0 .icon').html( doTwoThings(convertTemp(d.hourly[0].temp), d.hourly.weather[0].description) );
 $('.intro-weather .hourly .hour0 .time').html( convertTime(d.hourly[0].dt) );
//hour 2
 $('.intro-weather .hourly .hour1 .hour01').html( convertTemp(d.hourly[1].temp)+ '<span>&deg;</span>' );
 $('.intro-weather .hourly .hour1 .icon').html( printGraphic(d.hourly[1].weather[0].description));
 $('.intro-weather .hourly .hour1 .time').html( convertTime(d.hourly[1].dt) );
//hour 3
 $('.intro-weather .hourly .hour2 .hour02').html( convertTemp(d.hourly[2].temp)+ '<span>&deg;</span>' );
 $('.intro-weather .hourly .hour2 .icon').html( printGraphic(d.hourly[2].weather[0].description));
 $('.intro-weather .hourly .hour2 .time').html( convertTime(d.hourly[2].dt) );
//hour 4
 $('.intro-weather .hourly .hour3 .hour03').html( convertTemp(d.hourly[3].temp)+ '<span>&deg;</span>' );
 $('.intro-weather .hourly .hour3 .icon').html( printGraphic(d.hourly[3].weather[0].description));
 $('.intro-weather .hourly .hour3 .time').html( convertTime(d.hourly[3].dt) );
 //hour5
 $('.intro-weather .hourly .hour4 .hour04').html( convertTemp(d.hourly[4].temp)+ '<span>&deg;</span>' );
 $('.intro-weather .hourly .hour4 .icon').html( printGraphic(d.hourly[4].weather[0].description));
 $('.intro-weather .hourly .hour4 .time').html( convertTime(d.hourly[4].dt) );


//7 day weather forecast + additional details
  $('.day00 .day').html( displayDay(0) );
  $('.day00 .desc').html( printGraphic(d.daily[0].weather[0].description));
  $('.day00 .high').html( convertTemp(d.daily[0].temp.max)+ '<span>&deg;</span>');
  $('.day00 .low').html( convertTemp(d.daily[0].temp.min)+ '<span>&deg;</span>');

  $('.day01 .day').html( displayDay(1) );
  $('.day01 .desc').html( printGraphic(d.daily[1].weather[0].description));
  $('.day01 .high').html( convertTemp(d.daily[1].temp.max)+ '<span>&deg;</span>');
  $('.day01 .low').html( convertTemp(d.daily[1].temp.min)+ '<span>&deg;</span>');

  $('.day02 .day').html( displayDay(2) );
  $('.day02 .desc').html( printGraphic(d.daily[2].weather[0].description));
  $('.day02 .high').html( convertTemp(d.daily[2].temp.max)+ '<span>&deg;</span>');
  $('.day02 .low').html( convertTemp(d.daily[2].temp.min)+ '<span>&deg;</span>');

  $('.day03 .day').html( displayDay(3) );
  $('.day03 .desc').html( printGraphic(d.daily[3].weather[0].description));
  $('.day03 .high').html( convertTemp(d.daily[3].temp.max)+ '<span>&deg;</span>');
  $('.day03 .low').html( convertTemp(d.daily[3].temp.min)+ '<span>&deg;</span>');

  $('.day04 .day').html( displayDay(4) );
  $('.day04 .desc').html( printGraphic(d.daily[4].weather[0].description));
  $('.day04 .high').html( convertTemp(d.daily[4].temp.max)+ '<span>&deg;</span>');
  $('.day04 .low').html( convertTemp(d.daily[4].temp.min)+ '<span>&deg;</span>');

  $('.day05 .day').html( displayDay(5) );
  $('.day05 .desc').html( printGraphic(d.daily[5].weather[0].description));
  $('.day05 .high').html( convertTemp(d.daily[5].temp.max)+ '<span>&deg;</span>');
  $('.day05 .low').html( convertTemp(d.daily[5].temp.min)+ '<span>&deg;</span>');

  $('.day06 .day').html( displayDay(6) );
  $('.day06 .desc').html( printGraphic(d.daily[6].weather[0].description));
  $('.day06 .high').html( convertTemp(d.daily[6].temp.max)+ '<span>&deg;</span>');
  $('.day06 .low').html( convertTemp(d.daily[6].temp.min)+ '<span>&deg;</span>');

}


/* -------------------------------------------------------
   Function for printing weather-specific class on body
   ------------------------------------------------------- */

function changeTheme(d){
  // if the description includes the word "rain"
  if( d.indexOf('rain') > 0 ) {
    $('body').addClass('rainy');
  // if the description includes the word "cloud"
  } else if( d.indexOf('cloud') > 0 ) {
    $('body').addClass('cloudy');
  // if the description includes the word "sunny"
  } else if( d.indexOf('sunny') > 0 ) {
    $('body').addClass('sunny');
  // if none of those cases are true, assume it's clear
  } else {
    $('body').addClass('clear');
  }
}


/* -----------------------------------------------
   Function for printing weather-specific graphic
   ----------------------------------------------- */

function printGraphic(d){
  // if the description includes the word "rain"
  if( d.indexOf('rain') > 0 ) {
    return '<img src="img/rain2.png" alt="rainy icon">';
// if the description includes rain and is also lower then 40 degrees
  
  // if the description includes the word "cloud"
  } else if( d.indexOf('cloud') > 0 ) {
    return '<img src="img/cloudy6.png" alt="Cloudy icon">';
  // if the description includes the word "sunny"
  } else if( d.indexOf('sunny') > 0 ) {
    return '<img src="img/sunny2.png" alt="sunny icon">';
  //if the description includes the word "partly"
  } else if( d.indexOf('few', 'most') > 0 ) {
    return '<img src="img/partly.png" alt="partly cloudy icon">';
// if the description in cludes the word "thunder"
  } else if( d.indexOf('thunder', 'lightning') > 0 ) {
    return '<img src="img/lightning.png" alt="thunder icon">';
//if the description includes the word "hot"
  } else if( d.indexOf('hot') > 0 ) {
    return '<img src="img/hot.png" alt="hot icon">';
//if the description includes the word "cold"
  } else if( d.indexOf('cold') > 0 ) {
    return '<img src="img/cold.png" alt="thunder icon">';
//if the description includes the word "flurries"
  } else if( d.indexOf('flurries') > 0 ) {
    return '<img src="img/flurries.png" alt="flurries icon">';
//if the description includes the word "snow"
  } else if( d.indexOf('snow') > 0 ) {
    return '<img src="img/snow.png" alt="snow icon">';
  // if none of those cases are true, assume it's clear
  } else {
    return '<img src="img/sunny2.png" alt="Cloud icon">';
  }
}


function printImage(d){
//if its rains, big rain icon
  if( d.indexOf('rain') > 0 ) {
    return '<img src="img/rainybig.png" alt="rainy icon">';
//if its cloudy, big cloudy icon
  } else if( d.indexOf('cloud') > 0 ) {
    return '<img src="img/cloudybig2.png" alt="Cloud icon">';
//if its sunny, big sunny icon
  } else if( d.indexOf('sunny', 'clear') > 0 ) {
    return '<img src="img/sunnybig.png" alt="Cloud icon">';
//if its hot, big hot icon
  } else if( d.indexOf('hot') > 0 ) {
    return '<img src="img/hotbig.png" alt="Cloud icon">';
//if its cold, big cold icon
  } else if( d.indexOf('cold') > 0 ) {
    return '<img src="img/coldbig.png" alt="Cloud icon">';
//if its thundering or lightning, BIG THUNDER!
  } else if( d.indexOf('thunder','lightning') > 0 ) {
    return '<img src="img/bigthunder.png" alt="Cloud icon">';

   } else if( d.indexOf('partly', 'few', 'most') > 0 ) {
    return '<img src="img/partlybig.png" alt="Cloud icon">';

  } else if( d.indexOf('snow' ) > 0 ) {
    return '<img src="img/snowybig.png" alt="Cloud icon">';

  } else {
    return '<img src="img/sunnybig.png" alt="Cloud icon">';
  }
}



function doTwoThings(d,h) {
if(d.indexOf('clear') > 0 && h < 40 ) {
  return '<img src="img/cold.png" alt="thunder icon">';
}
}

function printMessage(d) {
  if( d.indexOf('rain') > 0 ) {
    return '<p> RAINY AS HELL! </p>';

  } if( d.indexOf('snow') > 0 ) {
    return '<p> SNOWY AS HELL! </p>';

  } if( d.indexOf('cloud') > 0 ) {
    return '<p> CLOUDY AS HELL! </p>';

  } if( d.indexOf('cold') > 0 ) {
    return '<p> COLD AS HELL! </p>';

  } if( d.indexOf('hot') > 0 ) {
    return '<p> HOT AS HELL! </p>';

  } if( d.indexOf('thunder' || 'lightning') > 0 ) {
    return '<p> STORMY AS HELL! </p>';

  } else {
    return '<p> CLEAR AS HELL! </p>';
  }
}

/* -----------------------------------------------
   Function for converting time to hours/minutes
   DO NOT EDIT
   ----------------------------------------------- */

function convertTime(t){

  var unixTimestamp = t;
  // since javascript works in milliseconds, you should convert 
  // the time into milliseconds by multiplying it by 1000.
  var date = new Date(unixTimestamp * 1000);
  // hours part from the timestamp (extra code needed to convert from military)
  var hours = (date.getHours() + 24) % 12 || 12;;
  // minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // seconds part from the timestamp
  var seconds = "0" + date.getSeconds();
  // will display time in 11:10 format
  var formatTime = hours + ':' + minutes.substr(-2);
  // send formatted date back
  return formatTime;

}


/* -----------------------------------------------
   Function for converting temp to fahrenheit
   DO NOT EDIT
   ----------------------------------------------- */

function convertTemp(t){

  return Math.round(((parseFloat(t)-273.15)*1.8)+32);

}


/* -----------------------------------------------
   Function for creating day of the week
   EDIT FORMAT OF DAY NAMES ONLY ("Monday", etc)
   ----------------------------------------------- */

// based on a system where 0 = today, 1 = tomorrow, etc.
// note: the number system below does not immediately correlate
// for example, 0 for today does not line up with 0 for Sunday below
// how this works – in the return statement, d.getDay() gets today's date
// as a number (if today is Thursday, d.getDay() will be 4)
// adding "n" to this number gives you how many days from today.
// n is passed as an argument to the displayDay() function
// in the main body of the code above.
// if today is Thursday, the 4th day of the week,
// and the number 2 is passed as an argument, 
// the function will return the number 6. 6 maps to Saturday in the 
// weekday array below.

function displayDay(n){

  var d = new Date();
  var weekday = new Array();

  weekday[0] = "S";
  weekday[1] = "M";
  weekday[2] = "T";
  weekday[3] = "W";
  weekday[4] = "T";
  weekday[5] = "F";
  weekday[6] = "S";

  var dispDay = d.getDay() + n;

  // adjust number system for numbers over 6
  // subtract 7 from totals higher than 6
  // to keep the day numbers in the array range above
  if(dispDay > 6){
    dispDay = dispDay - 7;
  }

  return weekday[ dispDay ];

}

/* --------------------------------------------------
   Event to get weather information when page loads
   -------------------------------------------------- */

window.onload = function() {
  weatherBalloon();
}

$('button').click(function(){
  $('.cover').addClass('open');
});
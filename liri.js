require("dotenv").config();
var keys = require("./key.js");

let moment = require("moment");
moment().format();
var fs = require("fs");
var axios = require("axios");
var Spotify = require('node-spotify-api');

var arguments = ""
for (var i = 3; i < process.argv.length; i++) {
  arguments = "" + arguments + " " + process.argv[i];
}
if (process.argv[2] == "spotify-this-song") {
  getSongInfo(arguments);
}
if (process.argv[2] == "movie-this") {
  getMovieInfo(arguments);
}
if (process.argv[2] == "concert-this") {
  getConcertInfo(arguments);
}
if (process.argv[2] == "do-what-it-says") {
  pickRandom();
}


//SPOTIFY
function getSongInfo(songInfo) {
  console.log(`you are in song info ` + songInfo);
  var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
  });
  spotify.search({ type: 'track', query: songInfo }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    data.tracks.items.forEach((song) => {
      printTracks(song)
    })
  });
}
function printTracks(track) {
  var albumName = track.album.name
  var song = track.name
  var spotifyUrl = track.preview_url
  var artist = track.artists[0].name
  console.log(`Song:  ` + song);
  console.log(`Album:  ` + albumName);
  console.log(`Url:  `) + spotifyUrl;
  console.log(`Artist:  ` + artist);
  console.log(`\n............................\n`);
}

//OMDB
function getMovieInfo(movieInfo) {
  console.log(`you are in movie info ` + movieInfo);
  axios.get("http://www.omdbapi.com/?t=" + movieInfo + "&y=&plot=short&apikey=trilogy").then(function (response) {
    console.log("\n=================");
    console.log(`Title: ${response.data.Title}`);
    console.log(`Year: ${response.data.Year}`);
    console.log(`IMBD Rating: ${response.data.imdbRating}`);
    console.log(`Country: ${response.data.Country}`);
    console.log(`Language: ${response.data.Language}`);
    console.log(`Actors: ${response.data.Actors}`);
    console.log(`Plot: ${response.data.Plot}`);
    console.log("\n=================");
  })
}

//BANDS IN TOWN
function getConcertInfo(concertInfo) {
  console.log(`you are in concert info ` + concertInfo);
  let arg = encodeURI(concertInfo.trim());
  axios.get("https://rest.bandsintown.com/artists/" + arg + "/events?app_id=codingbootcamp")
    .then(function (response) {
      var concertsArray = response.data;
      for (var i = 0; i < 5; i++) {
        var concertData = concertsArray[i]
        var venue = concertData.venue
        var venueName = venue.name
        var venueState = venue.region
        var venueCity = venue.city
        var date = concertData.datetime
        var venueStringES6 = `The venue's name is ${venueName}. Located in ${venueCity}, ${venueState}`
        var venueStringES5 = "The venue's name is " + venueName
        console.log(venueStringES6)
        console.log('Date:  ' + date);
        console.log("\n--------------------------\n")
      }
      console.log(" ");
      console.log(" ");
      console.log("Here is the data that was returned from bandsintown");
    }).catch(function (error) {
      console.log(error);
    })
}

//DO WHAT IT SAYS
function pickRandom() {
  console.log(`you are in random info `);
};
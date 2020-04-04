# liri-app

## Usage

1. Clone repo
2. npm install
3. cd liri-app

## Tech Used 

* NodeJS
* JavaScript
* NPM Request [Request](https://www.npmjs.com/package/request).
* NPM Spotify [Spotify](https://www.npmjs.com/package/spotify).
* NPM Bands-in-Town[API](https://manager.bandsintown.com/support/bandsintown-api).
* NPM IMDB    [OMDB API](http://www.omdbapi.com).

## Notes 

Liri will work four different ways which can take in one of the following commands:

* `spotify-this-song`
* `movie-this`
* `concert-this`
* `do-what-it-says`

## What Each Command Should Do

node liri.js spotify-this-song 
* This will show the following information about the song in your terminal/bash.
* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from
* if no song is provided then your program will default to
* "I Want it That Way"

node liri.js movie-this
* This will output the following information to your terminal/bash:
* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.

node liri.js concert-this
* This will show concerts by veenue, location and time in your terminal/bash.
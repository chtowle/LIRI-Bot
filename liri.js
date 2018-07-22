// load enviroment variables from a .env file into process.env
require('dotenv').config()

//send requests to the twitter, spotify, and OMDB APIs

let request = require('request')
let twitter = require('twitter')
let spotify = require('spotify')

//load keys method that returns a new Array iterator object that contains the keys for
// each index of the array
let keys = require('./keys.js')
let client = new twitter(keys.twitterKeys)
// fs node package
let fs = require("fs")

//load command-line input
let input = process.argv[2]

//
let inputArray = ""

//create input array
for (let i = 3; i < process.argv.length; i++) {
    if (i > 3 && i < process.argv.length) {
        inputArray = inputArray + "+" + process.argv[i]
    } else {
        inputArray = inputArray + process.argv[i]
    }
}
// switch statement selects function from user command-line input
switch (input) {
    case "my-tweets":
        tweets()
        break
        //spotify the song and if no song is entered default The Sign by Ace of Base
    case "spotify-this-song":
        if (inputArray) {
            spotify(inputArray)
        } else {
            spotify("The Sign")
        }
        break
    case "movie-this":
        //IMDB movie and if no movie entered default to Mr. Nobody
        if (inputArray) {
            imdb(inputArray)
        } else {
            imdb("Mr. Nobody")
        }
        break
    case "do-what-it-says":
        randomText()
        break

    default:
    // prompt user for correct input
        console.log("Please enter: my-tweets, spotify-this-song, movie-this, or do-what-it-says")
        break
}

// show last twenty tweets and when they where created
function tweets() {

    console.log("tweets")

}
// show the song information from spotify
function spotify(song) {

console.log("spotify")

}
// show the movie information from imdb
function imdb(movie) {

    console.log(" imdb")
}
// take text inside random.txt and call the command and data
function randomText() {

    console.log("random Text")
}

// Combining both chalk and figlet
let figlet = require('figlet');
let chalk = require("chalk");

figlet('@Walter', function(firstName, secondName){
    if(firstName) {
        return;
    }   
    let stlyeTheBackground = chalk.bgGreen(secondName);
    console.log(stlyeTheBackground);
});


// BELOW CODE IS WHERE I WAS PRACTISING!!!

/*
import greetUser from './greetings.js';
console.log(greetUser('Walter'));
*/

/*
let greet = require("chalk");
// let figlet = require('figlet');
let greet = require("./greetings");
let stlye = greet.bgRed(greet('Walter'));
console.log(stlye);
*/

/*
var figlet = require('figlet');
figlet.text('Broos!', {
    font: 'Ghost',
}, function(err, data) {
    if (err)
        return;
    console.log(data);
});
*/
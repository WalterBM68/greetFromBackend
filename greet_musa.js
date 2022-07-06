
// import greetUser from './greetings.js';
// console.log(greetUser('Walter'));

// let musa = require("chalk");
// let greet = require("./greetings");
// let stlye = musa.bgRed(greet('Walter'));
// console.log(stlye);

/*
let musa = require('figlet');
musa('Walter', function(a, b){
    if(a) return;
    console.log(b);
});
*/

var figlet = require('figlet');
figlet.text('Broos!', {
    font: 'Ghost',
}, function(err, data) {
    if (err)
        return;
    console.log(data);
});

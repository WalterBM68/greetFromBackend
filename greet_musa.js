
let chalk = require("chalk");
let greet = require("./greetings");
let figlet = require('figlet');

figlet.text(greet("Walter"), {
    font: 'Ghost',
}, function(firstName, secondName) {
    if (firstName){
        return;
    }  
    let stlyeTheBackground = chalk.bgGreen(secondName);
    console.log(stlyeTheBackground);
});

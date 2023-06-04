// Created by Brayden Anderson
// 6/4/2023
// The point of this project is to implement basic JavaScript in order to print out messages into the
// console. I intend on implementing some other features in order to make the project more welcoming.


// Variables to store user input which will be used throughout the program
let userName = '';
let userMessageType = '';
let quoteSection = 0;
let userNumber = 0;

// An array of funny quotes
const funny = [
    "Ned, I would love to stand here and talk with you-but I'm not going to. -Bill Murray",
    "I want my children to have all the things I couldn't afford. Then I want to move in with them. -Phyllis Diller",
    "I'm not superstitious, but I am a little stitious -Michael Scott",
    "I walk around like everything is fine, but deep down, inside my shoe, my sock is sliding off. -Anonymous",
    "I haven't spoken to my wife in years, I didn't want to interrupt her. -Rodney Dangerfield"
];

// An array of motivational quotes
const motivational = [
    "It is often the small steps, not the giant leeps, that bring about the most lasting change. -Queen Elizabeth II",
    "Education is the most powerful weapon which you can use to change the world. -Nelson Mandela",
    "There is always light, If only we're brave enough to see it. If only we're brave enough to be it. -Amanda Gorman",
    "If you want to lift yourself up, lift up someone else. -Booker T. Washington",
    "I have learned not to allow rejection to move me. -Cicely Tyson"
];

// An array of philosphical quotes
const philosophical = [
    "The unexamined life is not worth living. -Socrates",
    "Whereof one cannot speak, thereof one must be silent. -Ludwig Wittgenstein",
    "He who thinks great thoughts, often makes great errors. -Martin Heidegger",
    "Even while they teach, men learn. -Senece the Younger",
    "Man is condemned to be free. -Jean-Paul Sartre"
];

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Question 1 asks for the user's name and offers a small greeting
const question1 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Hello! What is your name?\n', function (string) {
            userName = string;
            if(userName === ''){
                userName = 'Anonymous'
                console.log(`Hi, ${userName}`);
            } else{
                console.log(`Hi, ${userName}!\n`);
            }
            resolve();
        })
    })
}

// Question 2 asks the user what type of message they would like to receive
const question2 = () => {
    return new Promise((resolve, reject) => {
        rl.question(`What type of message would you like to receive, ${userName}?
        Your choices are:
        - Funny
        - Motivational
        - Philosophical
        Please remember to type in these names exactly correctly!\n`, function(string) {
            userMessageType = string;
            if(userMessageType !== 'Funny' && userMessageType !== 'Motivational' && userMessageType !== 'Philosophical'){
                userMessageType = 'Funny';
                console.log(`Because you didn't input a response correcctly, you are defaulted to a ${userMessageType} message.`)
            }
            console.log(`You have chosen a ${userMessageType} message.\n`);
            resolve();
        })
    })
}

// Question 3 asks the user what number quote they would like
const question3 = () => {
    return new Promise((resolve, reject) => {
        rl.question(`Last question, ${userName}. What number would you like to pick between 1 and 5. Please pick a correct value!\n`,
        function (string) {
            userNumber = parseInt(string);
            if(userNumber < 1 || userNumber > 5 || isNaN(userNumber) === true){
                console.log(`${userNumber} is out of the range so you have been defaulted to 1.`);
                userNumber = 1;
            }
            console.log(`You have chosen the number ${userNumber}. Here is your message. Have a lovely day!\n`);
            if(userMessageType === 'Funny'){
                console.log(funny[userNumber - 1]);
            } else if(userMessageType === 'Motivational'){
                console.log(motivational[userNumber - 1]);
            } else{
                console.log(philosophical[userNumber - 1]);
            }
            resolve();
        })
    })
}

// Main program which runs the three questions
const main = async () => {
    await question1();
    await question2();
    await question3();
    rl.close()
}

main();
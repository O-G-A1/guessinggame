let correctGuess = parseInt(Math.random()*8)+1;
let Guess;
let minimumAttempt = 1;
let maximumAttempt = 5;
let reducedAttempt = 5;
console.log(correctGuess);


for(minimumAttempt=1; minimumAttempt<=maximumAttempt; minimumAttempt++){
    Guess= parseInt(prompt("Guess " + minimumAttempt + " of " + maximumAttempt + ": Enter your guess (1-8):"), 10);

    if(Guess==correctGuess){
        alert("Congratulations! You guessed right, your guess is " + correctGuess + ", so this ends the game");
        break;
    }

    else if(Guess!=correctGuess){
        alert("Wrong guess");
    }
    
    // else if(Guess<correctGuess){
    //     alert("Wrong guess, try again.");
    // }
    // else if(Guess>correctGuess){
    //     alert("Wrong guess, try again.");
    // }

    if(minimumAttempt==maximumAttempt){
        alert("Sorry, you have used all your attemts. You lose! ");
    }
    let reducedAttempt=maximumAttempt-minimumAttempt;
    if(reducedAttempt>0){
        alert("you have " + reducedAttempt + " attempts left");
    }
};

console.log(Guess);



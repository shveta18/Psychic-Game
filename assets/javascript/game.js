var letterChoices = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        // initializing the variables for the start of a game
        var wins = 0;
        var losses = 0;
        var guessesLeft = 9;
        //user gudesses to be stored in an array to be displayed later
        var userGuess = [];

         //determines which letter the computer chose
        var compPick = letterChoices[Math.floor(Math.random() * letterChoices.length)];
        console.log("Computer chose" + " " + compPick);


        document.onkeyup = function (event) {

            var userPick = event.key;
            console.log("User Guess is" + " " + userPick);
            
            //If the user inputs a value from the array, the game registers the keystroke.
            if (letterChoices.includes(userPick)) { 

                // within this if statement if the user pick matches computer pick, add 1 to the win, and reset the guesses left back to 9
                if (userPick === compPick) {
                    console.log("MATCHED!!! MATTCHED!! MATCHEDDDDD!!!");
                    wins++;
                    guessesLeft = 9;
                    // if the user wins, reset the user entry array to empty
                    userGuess.length = 0;
                    console.log("Emptied the array to start over");
                    //display the total wins without resetting
                    document.getElementById("wins").innerHTML = wins;
                    //display the total guesses reset to 9
                    document.getElementById("guesses-left").innerHTML = guessesLeft;
                    //resetting what the computer chose to another value
                    compPick = letterChoices[Math.floor(Math.random() * letterChoices.length)];
                    console.log("Computer chose NEW value" + " " + compPick);
                    //display the now empty array
                    document.getElementById("Guesses").innerHTML = userGuess;

                }
                //if the user pick doesn't match computer entry.  
                else {
                    console.log("the users guess did not match, here is what you chose: " + userGuess);
                    // push the value of the userPick variable to the array of userGuess and decrease the guesses left counter by 1
                    userGuess.push(userPick);
                    //display the values selected by the user
                    document.getElementById("Guesses").innerHTML = userGuess;
                    console.log(userGuess);
                    guessesLeft--;
                    document.getElementById("guesses-left").innerHTML = guessesLeft;
                    console.log("the guesses left are: " + guessesLeft);
                    // the code below is for when the user has reached the max tries, the game should reset. 
                    if (guessesLeft === 0) {
                        console.log("no more guesses left");
                        userGuess.length = 0;
                        console.log("reset the userGuess array to empty");
                        losses++;
                        document.getElementById("losses").innerHTML = losses;
                        guessesLeft = 9;
                        //display the total guesses reset to 9
                        document.getElementById("guesses-left").innerHTML = guessesLeft;
                        console.log("guesses have been reset after 9 tries. Game begins again");
                        //display the now empty array
                        document.getElementById("Guesses").innerHTML = userGuess;
                        //resetting what the computer chose to another value
                        compPick = letterChoices[Math.floor(Math.random() * letterChoices.length)];
                        console.log("Computer chose NEW value" + " " + compPick);
                    };
                };

            };



        };

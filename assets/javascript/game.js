

confirm("are you ready to play??");


var letterArray = ["a", "b", "c", "d", "e"]
var number = Math.floor(Math.random() * letterArray.length);
//Array
var wrong = [];
var secretLetter = letterArray[number];


var wins = 0;
var losses = 0;
var guessesLeft = 5;
document.getElementById("losses").innerHTML = (losses);
document.getElementById("wins").innerHTML = (wins);
document.getElementById("guessesleft").innerHTML = (guessesLeft);






//ne game
function resetGame() {
    guessesLeft = 5
    wrong = [];
    //confirm("are you ready to play??");
    number = Math.floor(Math.random() * letterArray.length);

    secretLetter = letterArray[number];
    var sofar = document.getElementById("sofar");
    sofar.textContent = "";
}


//Game
document.onkeyup = function (event) {
    var input = event.key;
    console.log(event.key);


    if (guessesLeft == 0) {
        alert("you ran out of guesses for this round! try again!")
        losses++;
        document.getElementById("losses").innerHTML = (losses);
        resetGame();
    }

    else if (secretLetter == input) {
        wins++;
        alert("goodjob! you guessed the letter I was thinking!");
        document.getElementById("wins").innerHTML = wins;

        letterArray.splice(secretLetter, 1);
        document.getElementById("ball").innerHTML = '<img src="http://www.advisoruniverse.info/wp-content/uploads/2017/01/00000000-1.jpg">'
        resetGame();
    }

    else {
        console.log("WRONG LETTER " + input + " INDEX IN WRONG IS: " + wrong.indexOf(input))
        //SEE IF LETTER IS IN WRONG
        if (wrong.indexOf(input) == -1) {
            guessesLeft--
            document.getElementById("guessesleft").innerHTML = (guessesLeft);
            //Add wrong guess to wrong array
            wrong.push(input);
            var sofar = document.getElementById("sofar");
            sofar.textContent = wrong.join(", ");
        }
        else{
            alert("YOU ALREADY GUESSED. SILLY")
        }

    }

    if (losses == 5) {
        alert("YOU LOST!");
        losses = 0;
        document.getElementById("losses").innerHTML = (losses);
        resetGame();
    }

    if (wins == 5) {
        alert("Congratulations! YOU WON!")
        wins = 0;
        document.getElementById("wins").innerHTML = (wins);
        resetGame();
    }

};


function update() {


    var html =
        "<p>wins:" + wins + "</p>" +
        "<p>losses:" + losses + "</p>"
    "<p>guesses left:" + guessesLeft + "</p>";

    document.querySelector("#game").innerhtml = html;
}






/*
if(userInput===k);

 var wins = 0;
 var losses = 0;
 var guessessofar = 0;
 var secretletterone  = "k";

if()


 if ("guessessofar==secretletterone", ++1 "wins"

 );

 else if (! == secretlettersofar, ++1 losses
     guessessofar 
 )
*/
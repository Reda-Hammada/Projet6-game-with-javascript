var randomNumber = Math.floor(Math.random() * 100);
var userInput = prompt("Enter a Number");

function game(){


    if(randomNumber > userInput) {

        alert("it is Greater than" + " " + userInput);
    }

    else if( randomNumber < userInput) {

        alert("it is Smaller than" + " " + userInput);

    }
}

game();
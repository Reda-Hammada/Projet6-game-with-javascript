//Variables Declaration 
var btn;
var output;
var randomNumber;
var guessedNumber;
var attempts;
var lostMessage;

// entrer: saiser

btn = document.getElementById('btn');
output =document.getElementById("output");
randomNumber = Math.floor(Math.random() * 100);

// traitment 

btn.addEventListener('click', function(){
guessedNumber = document.getElementById('userinput').value;
    
   

    if(guessedNumber == randomNumber) {

        output.innerHTML  = "Correct";
        
    }

    else {

        if(randomNumber > guessedNumber){

            output.innerHTML = "le nombre est plus grand que " + " " + guessedNumber;
        }

    else {

        output.innerHTML = "le nombre est moins que" + " " + guessedNumber;
    }
}
});
//variable declarations:
var btn
var randoMnumber;
var output;
var guessedNumber;
var attempts;
var lostMessage;

// entrer: saiser 

btn = document.getElementById('btn');
lostMessage ="you have lost after";
guessedNumber = document.getElementById('output').value;
attempts = 10;
randoMnumber = Math.floor(Math.random() * 100);

btn.addEventListener('click',  function(){

    if( randoMnumber == guessedNumber) {


        output = this.innerHTML = 'correct';
    }

    else if (randoMnumber > guessedNumber) {

        output = this.innerHTML = "le nombre est plus grand que" + r ;
    }

    else {

        output = this.innerHTML = "le nombre est moin que"
    }


});


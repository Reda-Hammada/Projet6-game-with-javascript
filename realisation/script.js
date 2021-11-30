//varibales declaration 
var btn;
var guessedNumber;
var randomNumber;
var output;
var attempts;
var tentative;

//Entrer: saiser 
btn = document.getElementById('bt');
randomNumber = Math.floor(Math.random() * 100);
guessedNumber = document.getElementById('userinput');
output = document.getElementById('useroutput');
attempts = 10;
tentative = document.getElementById('attempt');


// traitment 

btn.addEventListener('click', function(){
   --attempts;
    guessedNumber = document.getElementById('userinput').value;
    tentative.innerHTML = attempts + '-tentative';

    if ( attempts > 0) {
        
        if(randomNumber == guessedNumber) {
                if( attempts >= 8){

                    output.innerHTML =  'Bravo, vous etes un Génie !!!';
                    
                }

                else {
            
                    output.innerHTML ='Félicitations, vous avez gagné après  tentatives ' + (10 - attempts);
                }
        }
         else{

                if(randomNumber > guessedNumber){

                    output.innerHTML = "plus";
                }

                
                else{

                    output.innerHTML = "moins que";
                }
            }

           
    }

    else {


            output.innerHTML = "c'est raté";
        }

        
    

  

});




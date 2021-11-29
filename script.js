  // declaration des variables 
  var randomNumber;
  var userInput;
  var message;
  // entrer: saiser 
   randomNumber = Math.floor(Math.random() * 100);
   userInput = prompt("Enter a number");
  // treatment 
  var n = parseInt(userInput);
  if (randomNumber > userInput) {

      message = "it is greater than " + " " + userInput;

  }

  else{

      message = "it is smaller than " + " " + userInput;
  }
  // sortie: Affichage
  alert(message);
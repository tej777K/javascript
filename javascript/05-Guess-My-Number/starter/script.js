'use strict';

// Selecting an element

// console.log(document.querySelector('.message').textContent);

// //setting the content of the element

// document.querySelector('.message').textContent = 'Correct Number ! .🤑';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23; //Set the value
// console.log(document.querySelector('.guess').value); // Reading the value

//Setting the secret number

let secretnumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

//Handling the click events

// If we click on the button something should happen
// So just select the button element

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //When there is no input

  if (!guess) {
    // document.querySelector('.message').textContent = 'No number entered';
displayMessage('No number entered');
    //This when the player wins
  } else if (guess === secretnumber) {
    displayMessage('Correct Number ! .🤑');
    // document.querySelector('.message').textContent = 'Correct Number ! .🤑';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

 
 //When guess is wrong 
 else if(guess !== secretnumber){
  if (score > 1) {
    // document.querySelector('.message').textContent =guess > secretnumber ? 'Too High!' : "Too Low!";
   displayMessage(guess > secretnumber ? 'Too High!' : "Too Low!")
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    // document.querySelector('.message').textContent = 'You lost the Game ';
    displayMessage('You lost the Game');
    document.querySelector('.score').textContent = 0;
  }

 }
   //Whwn the guess is too high

//   else if (guess > secretnumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too High!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the Game ';
//       document.querySelector('.score').textContent = 0;
//     }
//   }

//   //When the guess is too low
//   else if (guess < secretnumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too Low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the Game ';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Guess the number';
  displayMessage('Guess the number');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

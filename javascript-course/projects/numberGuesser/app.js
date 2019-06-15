let min = 1,max = 10,winningNum = 2,guessesLeft = 3;

const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');


//Assign ui min and max
minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    document.location.reload();
  }
});

guessBtn.addEventListener('click',function(){
  let guess = parseInt(guessInput.value);
  if(isNaN(guess) || guess > max || guess < min){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }else{

  //game over win
  if(guess === winningNum){ 
    gameOver(true, `${winningNum} is correct!, YOU WIN!`);
    
  }else{
  //wrong number
  guessesLeft -= 1;

  if(guessesLeft === 0){
    //game over lost
    gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);

  }else{
    //answer wrong but game continues

    guessInput.style.borderColor = 'red';
    setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
    guessInput.value = '';
    }
  }

  }

});


//game over
function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';

  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  setMessage(msg, color);

  //play again

  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';

  // guessBtn.removeEventListener("click", guessNumber);
  // guessBtn.addEventListener("click", function(){
  //    document.location.reload();
  // });
}

function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}
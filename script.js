'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='Correct number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent='13';
document.querySelector('.score').textContent='20';
document.querySelector('.guess').value='13';
console.log(document.querySelector('.guess').value);
*/
let secretNumber= Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;
function displayMessage(message){
document.querySelector('.message').textContent=message;
}
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess);
    console.log(typeof guess);
     

    if(!guess)
        {
    document.querySelector('.message').textContent='No number!😒';
}
//When player wins
else if(guess===secretNumber)
{
displayMessage('Correct number! :)');
document.querySelector('.number').tsextContent=secretNumber;
document.body.style.backgroundColor='green';
document.querySelector('.number').style.width='30rem';
if(score>highscore)
    {highscore=score;
     document.querySelector('.highscore').textContent=highscore;
    }
} 
//When guess is wrong
else if(guess!==secretNumber){
    if(score>1)
        {document.querySelector('body').style.backgroundColor='yellow';
        displayMessage(guess>secretNumber?'Too High':'too low');
        score--;
        document.querySelector('.score').textContent=score;}
        else{document.querySelector('body').style.backgroundColor='red';
            document.querySelector('.message').textContent='Game Over(You lost the game)';
            document.querySelector('.score').textContent=0;
        }
//when guess is too high
/*else if(guess>secretNumber)

{if(score>1)
    {document.querySelector('body').style.backgroundColor='yellow';
    document.querySelector('.message').textContent='Too High';
    score--;
    document.querySelector('.score').textContent=score;}
    else{document.querySelector('body').style.backgroundColor='red';
        document.querySelector('.message').textContent='Game Over(You lost the game)';
        document.querySelector('.score').textContent=0;
    }
}//when guess is too low
    else if(guess<secretNumber)
    {

        if(score>1){document.querySelector('body').style.backgroundColor='yellow';
            document.querySelector('.message').textContent='Too Low';
            score--;
        document.querySelector('.score').textContent=score;
        }
    else{document.querySelector('.message').textContent='Game Over';
        document.querySelector('body').style.backgroundColor='red';
        document.querySelector('.score').textContent=0;
    }*/
}
});
document.querySelector('.again').addEventListener('click',function()
{
  score=20;
  secretNumber=Math.trunc(Math.random()*20)+1;
  displayMessage('Start guessing...');
document.querySelector('.score').textContent=score;
    
  document.querySelector('.guess').value='';
  document.body.style.backgroundColor='#222';
  document.querySelector('.number').textContent='?';
  document.querySelector('.number').style.width='15rem';  


});

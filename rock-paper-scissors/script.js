const userHand = document.getElementById("userHand");
const computerHand = document.getElementById("computerHand");
const heading = document.getElementById("heading");
const buttons = document.querySelectorAll(".choices button");

const arr = ["rock", "paper", "scissors"];
const img = {
    rock: "rock.png",
    paper: "paper.png",
    scissors: "scissors.png",
}

function getWinner(user, comp){
    if(user === comp) return "Draw!";
    if((user === "rock" && comp === "scissors") || (user === "paper" && comp === "rock")|| (user === "scissors" && comp === "paper")){
        return " You Win";
    }else{
        return "Computer Wins";
    }
        
}

function play(event){
    const userMove = event.currentTarget.className;
    const compMove = arr[Math.floor(Math.random() * 3)];
    
  userHand.src     = img[userMove];
  computerHand.src = img[compMove];
 heading.textContent = getWinner(userMove, compMove);
}


 
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", play);
}















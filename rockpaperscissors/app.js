let user=0;
let computer=0;
const userscore=document.querySelector("#you");
const compscore=document.querySelector("#comp");
const choices=document.querySelectorAll(".choice")
const word=document.querySelector("#word");
const compchoices=()=>{
    const options=["rock","paper","scissors"];
    const rand=Math.floor(Math.random()*3);
    return options[rand];
};

const drawGame = () => {
    word.innerText = "Game was Draw. Play again.";
    word.style.backgroundColor = "#081b31";
};


const showWinner=(userwin,userchoice,compchoice)=>{
    
    if(userwin){
        user++;
        userscore.innerText=user;
        word.style.backgroundColor="green";
        word.innerText=`You win! Your ${userchoice} beats ${compchoice}`;
    }
    else{
        computer++;
        compscore.innerText=computer;
        word.style.backgroundColor="red";
        word.innerText=`You lose! computer ${compchoice} beats ${userchoice}`;
    }
}

const playGame=(userchoice)=>{
    const compchoice=compchoices();
    if(userchoice===compchoice){
        drawGame();

    }
    else {
        let userWin = true;
        if (userchoice === "rock") {
          //scissors, paper
          userWin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
          //rock, scissors
          userWin = compchoice === "scissors" ? false : true;
        } else {
          //rock, paper
          userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compchoice);
      }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userchoice = choice.getAttribute("id");
      playGame(userchoice);
      
    });
  });



















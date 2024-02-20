let userScore = 0 ;
let compScore = 0 ;

const choices = document.querySelectorAll(".choice");

const userChoicePara = document.querySelector("#user-score");
const compChoicePara = document.querySelector("#comp-score");

const getCompChoice = () => {
    const option = ["rock","paper","scissors"]
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was draw ! , try again";
    msg.style.backgroundColor = "#081b31"; 
}

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userChoicePara.innerText=userScore;
        msg.innerText = `You win !!! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compChoicePara.innerText = compScore;
        msg.innerText=`You lose !!! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="green";
    }
}

const playGame = (userChoice)=>{
    const compChoice = getCompChoice();
    if(userChoice===compChoice){
        drawGame();
    }
    else{
            let userWin = true;
            if(userChoice==="rock"){
                if(compChoice=="paper"){
                    userWin=false;
                }
            }
            else if(userChoice==="paper"){
                if(compChoice==="scissors"){
                    userWin=false;
                }
            }
            else{
                if(compChoice==="rock"){
                    userWin=false;
                }
            }
            showWinner(userWin,userChoice,compChoice);

        
    }

}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);

    });

});

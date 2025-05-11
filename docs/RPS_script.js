let uScore=0;
let cScore=0;
const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const compScore= document.querySelector("#comp_score");
const userScore= document.querySelector("#user_score");

const generatecompChoice = ()=>  // function for  genrate computer choice 
{
const options = ["rock", "paper", "scissors"];
const i=Math.floor(Math.random()*3);
return options[i];
};


const showWinner=(userWin,userChoice,compChoice) =>
{
    if(userWin){
        msg.innerText=`You Win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="rgb(0, 195, 0)";
        msg.style.fontWeight="550";
        uScore++;
        userScore.innerText=uScore;
     }
     else{
        msg.innerText=`You loose  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="#fb2e01";
        msg.style.fontWeight="550";
        cScore++;
        compScore.innerText=cScore;

    }
}



const playGame=(userChoice) =>  // fucntion for play game between computer choice
{
console.log("userChoice = ",userChoice);
// generate computer choice
const compChoice= generatecompChoice();
console.log("computer choice = ",compChoice);
if(userChoice === compChoice){
    console.log("DRAW");
    msg.innerText="Game is Draw";
    msg.style.backgroundColor="blue";
}
else{
    let userWin=true;
    if(userChoice==="rock")
     {
        compChoice==="paper" ? userWin=false : userWin=true;
     }
    else if(userChoice === "paper")
     {
        compChoice === "rock" ? userWin=true : userWin=false; 
     }
     else{
        compChoice === "rock" ? userWin=false : userWin=true;
     }
    showWinner(userWin,userChoice,compChoice);
}

};



choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice=choice.getAttribute("id")

        // console.log("choice is clicked",userChoice);
     playGame(userChoice);
    //  generatecompChoice();
    });
});
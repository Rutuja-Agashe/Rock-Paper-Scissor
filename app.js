let userscore =0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#UserScore");
const compScorePara = document.querySelector("#CompScore");


const genCompChoice =() => {
    const option = ["rock","paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
};

const drawGame = () => {
    console.log("Game was Draw.");
    msg.innerText = "Game was Draw , Play Again" ;
    msg.style.backgroundColor ="#d4ac6e";
};

const ShowWinner = (userWin,UserChoice,compchoice) => {
    if(userWin) {
        userscore++;
        userScorePara.innerText=userscore;
        console.log("You win!");
        msg.innerText = `You Win! your ${UserChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "Green";
    }
    else{
        compscore++;
        compScorePara.innerText=compscore;
        console.log("you lose");
         msg.innerText = `You lose. ${compchoice} beats yous ${UserChoice}`
         msg.style.backgroundColor = "red";
    }
};

const playGame = (UserChoice) =>{
    console.log("user choice =", UserChoice);
    // Generate comp choice -> moduler
    const compchoice = genCompChoice();
    console.log("comp choice is ", compchoice);

    if(UserChoice===compchoice){
        // drawgame
        drawGame();
    }
    else{
        let userWin = true;
        if(UserChoice==="rock"){
            // scissors,paper
           userWin= compchoice === "paper" ? false : true;
        }else if(UserChoice === "paper"){
            // scissors,rock
            userWin = compchoice === "scissors" ? false:true;
        }
        else{
            // rock, paper
            userWin = compchoice ==="rock"? false:true;
        }

        ShowWinner(userWin, UserChoice, compchoice);
    }
}
choices.forEach((choice)=> {
    console.log(choice);
    choice.addEventListener("click", ()=> {
        const UserChoice = choice.getAttribute("id");
        playGame(UserChoice);
    })
})
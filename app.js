let userScore = 0;
let compScore=0;

let paraYou = document.querySelector(".para-you");
let paraComp = document.querySelector(".para-comp");
let msg = document.querySelector(".btn");

const choices = document.querySelectorAll(".choice");



// useer choice 
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked ",userChoice)
      playGame(userChoice);
    })
});


//computer choice

const  genCompChoice=()=>{
  const options=["stone","paper","scissor"];
   const randIdx=  Math.floor(Math.random()*3);
 return options[randIdx];
}


// winner


const showWinner=(userWin)=>{
  if(userWin){
    console.log("you win");
    userScore++;
    paraYou.innerText=userScore;
    msg.innerText="Yeah You Win!";
    msg.style.color="green";
   }
  else {
    console.log("you loose");
    compScore++;
    paraComp.innerText=compScore;
    msg.innerText="Sorry You Loose!";
    msg.style.color="red";
  }
}







//game logic
const playGame=(userChoice)=>{
   console.log("user choice = ",userChoice);

// computer choice called
   const compChoice = genCompChoice();

  
   console.log("comp choice = ",compChoice);
   if(userChoice===compChoice)
   {
    console.log("it is a draw");
    msg.innerText="its a draw";
    msg.style.color="blue";
   }
   else{
    let userWin= true;
    if(userChoice==="stone")
    {
      // computer -> scissor or paper
      userWin= compChoice==="scissor"? false :true;
    }
    else if(userChoice==="paper")
    {
      // computer -> scissor or stone
      userWin= compChoice==="stone"? false :true;
    }
    else if(userChoice==="scissor");
    {
      // computer -> stone or paper
      userWin= compChoice==="stone"? false :true;
    }
     showWinner(userWin);
   }
  
   
}
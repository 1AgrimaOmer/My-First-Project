let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userscor=document.querySelector("#userscore");
const compscor=document.querySelector("#compscore");

const  gencompchoice =() => {
    const options=["rock" ,"paper", "scissor"];
// rock,paper,scissor
const randind= Math.floor(Math.random() * 3);
return options[randind];

};
const drawgame=() => {
  
    msg.innerText=("Game is draw");
    msg.style.backgroundColor= "#081b31";
}

const showwinner = (userwin, userchoice , compchoice)=> {


    if(userwin){
     userscore++;
     userscor.innerText = userscore;
        msg.innerText='You Win!';
        msg.style.backgroundColor= "green";
    }else{
     compscore++;
     compscor.innerText = compscore;
        msg.innerText='You Lose!';
                msg.style.backgroundColor= "red";
    }
    }

const playgame=(userchoice) => {
    console.log("user choice=",userchoice);
    // generate computer choice
const compchoice= gencompchoice();
console.log("comp choice = ",compchoice);

if(userchoice=== compchoice){
    // draw game
   drawgame();
}
else {
    let userwin = true;
    if(userchoice=="rock"){
        //scissor,paper
        userwin =compchoice==="paper"? false: true;
}
else if(userchoice==="paper"){
    // rock,scissor
    userwin =  compchoice==="rock" ? true : false;
}else{
    // rock,paper
    userwin= compchoice==="rock" ? false: true;
}
showwinner(userwin,userchoice,compchoice);
}
}



choices.forEach((choice) => {
   
    choice.addEventListener("click",() => {
        const userchoice=choice.getAttribute("id");

playgame(userchoice);
    });
} );
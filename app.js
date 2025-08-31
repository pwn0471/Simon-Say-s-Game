let gameseq=[];
let userseq=[];

let started=false;
let level=0;

let bnts=["red", "purple", "green", "yellow"];

let h2= document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (started == false){
        console.log("Game started");
        started=true;

        levelup();
    }
});

function btnflash(btn){
    btn.classList.add("flash"); 
    setTimeout(function (){
        btn.classList.remove("flash");
    }, 150);
}

function userflash(btn){
    btn.classList.add("userflash"); 
    setTimeout(function (){
        btn.classList.remove("userflash");
    }, 150);
}


function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    
    let raninx=Math.floor(Math.random()*3);
    let randcolor= bnts[raninx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor); 
    console.log(gameseq);
    btnflash(randbtn);
}
  
function checkans(idx){

   if(userseq[idx]===gameseq[idx]){
    if(userseq.length==gameseq.length){
       setTimeout(levelup, 1000);  
    }
    //console.log("same vla");
   }else{
    h2.innerHTML=`Game Over !  Your score was <b>${level}</b> <br> Press any key to start again.`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function (){
        document.querySelector("body").style.backgroundColor="black";
    }, 150);
    reset();
   }

}

function btnpress(){
    let btn=this;
    userflash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length-1);
}

let allbtns= document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click", btnpress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
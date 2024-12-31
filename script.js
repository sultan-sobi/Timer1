

const startE=document.getElementById("start");
const stopE=document.getElementById("stop");
const resetE=document.getElementById("reset");
const timerE=document.getElementById("timer");

let timer;
let totalTime=1500;

function updateTimer(){
   
    let minute= Math.floor(totalTime/60);
    let second=totalTime%60;
    let Time= `${minute.toString().padStart(2,"0")} : ${second.toString().padStart(2,"0")}`;
    timerE.innerText=Time;
}
function startTimer(){
    timer= setInterval(() => {
        totalTime--;
       updateTimer();
          if(totalTime===0){
            alert("Time is up! ");
            clearInterval(timer);
            totalTime=1500;
          }
    }, 1000);
    
}

function stopTimer(){
    
    clearInterval(timer);
    
}

function resetTimer(){
    clearInterval(timer);
    totalTime=1500;
    updateTimer();
    
}

startE.addEventListener("click",startTimer);
stopE.addEventListener("click",stopTimer);
resetE.addEventListener("click",resetTimer);
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msgcontainer")
let newGame = document.querySelector("#NewGame");
let msg = document.querySelector("#msg")
let turnX = true;

// identifing the all possible winning patterns
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
// to indentify who turn is next
boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(turnX){
            box.innerText = "X";
            turnX = false;
        }else{
            box.innerText ="0";
            turnX = true;
        }
        box.disabled = true;// to keep the value constant
        checkWinerr();// winning functions
    })
})
// winning condition
const checkWinerr = () =>{
    for( let pattern of winPatterns){
       let pos1 = boxes[pattern[0]].innerText;
       let pos2 = boxes[pattern[1]].innerText;
       let pos3 = boxes[pattern[2]].innerText;

       if(pos1 !="" && pos2 !="" && pos3 !=""){
        if(pos1 === pos2 && pos2 === pos3){       
            showWinner(pos1);     
        }
       }
    }
}
const showWinner = (winner) =>{
    msg.innerText =`Congrats! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    boxDisable();
}

let boxDisable = () =>{
    for (box of boxes){
        box.disabled = true;
    }
}

let boxenable = () =>{
    for (box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = () =>{
    turnX = true;
    boxenable();
    msgContainer.classList.add("hide");
}

newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
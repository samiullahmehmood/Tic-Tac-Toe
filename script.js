let boxes = document.querySelectorAll(".box");
let startBtn = document.querySelector("#startBtn");
let resetBtn = document.querySelector("#resetBtn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("p");
let game = document.querySelector("main");


let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


let gameOver = false;
let turnO = true; 
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(gameOver) return;
        if (box.innerText !== "") return;
        box.classList.add("pop")
        if (turnO){
            box.innerText = "O";
            turnO = false;
        } else{
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true;
        checkWinner();
        
    })
});

const enableBoxes = () => {
    for (let box of boxes){
        box.innerText= "";
        box.disabled = false;
    }
}



const showWinner = (winner) => {
    gameOver = true;
    msgContainer.classList.remove("hide");
    msgContainer.classList.add("show");
    game.classList.add("gameHide");
    msg.innerText = `Congratulation ${winner} you are winner`;
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
       let pos1 = boxes[pattern[0]].innerText;
       let pos2 = boxes[pattern[1]].innerText;
       let pos3 = boxes[pattern[2]].innerText;

       if (pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 === pos2 && pos2 === pos3){
            showWinner(pos1);
       }
       }
    }
}
const startGame = () => {
    gameOver = false;
    turnO = true;
    game.classList.remove("gameHide")
    msgContainer.classList.add("hide");
    enableBoxes();
}
startBtn.addEventListener("click", startGame);
resetBtn.addEventListener("click", startGame)
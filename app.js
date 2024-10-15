let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector(".new-Btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");


let turnO = true;
count = 0;

const winPattrens = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [2,5,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
       
        if(turnO){
            box.innerText = "X";
            turnO = false;
        }else{
            box.innerText = "O";
            turnO = true;
        }
        box.disabled = true;
        let isWinner = checkWinner();

        count++
        if (count === 9 && !isWinner){
            gameover()
        }
    });
        
});
    let gameover = () => {
        msg.innerText = `Game Over `;
        msgContainer.classList.remove("hide");
        disabledBtn();
    }




const enabledBtn = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }};

    const resetGame = () => {
        turnO = true;
        enabledBtn();
        msgContainer.classList.add("hide");
    };


  const disabledBtn = () => {
    for (let box of boxes){
        box.disabled = true;
    }
  };

  const showWinner = (winner) => {
    msg.innerText = `Congratulaton, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBtn();
  };


const checkWinner = () => {
    for(let patren of winPattrens){
            let p1v = boxes[patren[0]].innerText;
            let p2v = boxes[patren[1]].innerText;
            let p3v = boxes[patren[2]].innerText;
            if(p1v != "" && p2v != "" && p3v != ""){
                if(p1v === p2v && p2v === p3v){
                
                showWinner(p1v);
                }
            }

       
        
    }
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
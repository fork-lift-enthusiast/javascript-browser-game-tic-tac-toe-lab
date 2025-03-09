// /*-------------------------------- Constants --------------------------------*/
const board = document.querySelector(".board");
let squareEls = document.querySelectorAll(".sqr");
let messageEl = document.querySelector("#message");
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 7],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ]
  

// /*---------------------------- Variables (state) ----------------------------*/
let opWinner = false
let winner = false;
tie = false;
let count = 0;
let gameBoard =[ 
         "","","",
         "","","",
         "","",""
]

// /*------------------------ Cached Element References ------------------------*/
// /*-------------------------------- Functions --------------------------------*/
const check = () => {
 
    winningCombos.forEach((combo,index)=>{
        count = 0
        combo.forEach((c)=>{
            if( gameBoard[c]==="X"){
                count+=1
            if (count === 3){
                winner = true
            }
            }
            
        })
    })
}
const checkOp = () => {
 
    winningCombos.forEach((combo,index)=>{
        count = 0
        combo.forEach((c)=>{
            if( gameBoard[c]==="O"){
                count+=1
            if (count === 3){
                Opwinner = true
            }
            }
            
        })
    })
}
/*----------------------------- Event Listeners -----------------------------*/
board.addEventListener("click", (event) => {
  event.target.innerText = "X";
gameBoard[(Number(event.target.id))] = ("X")
  for (i = 1; i > 0; ) {
    oponentMove = Math.floor(Math.random() * 9);
    if (document.getElementById(oponentMove).innerText === "") {
      document.getElementById(oponentMove).innerText = "O";
      count += 1;
      gameBoard[oponentMove] = "O"
      break;
    }
    if (count >= 4) {
      break;
    } else {
      continue;
    }
  }
check()
checkOp()
console.log(gameBoard)
console.log(winner)
if (winner === true){
    messageEl.innerText = "YOU WON!!!!"
    for(i = 0;i<=9;i++){
        document.getElementById(i).innerText =""
    }
}
if (opWinner === true){
    messageEl.innerText = "you lost !!"
    for(i = 0;i<=9;i++){
        document.getElementById(i).innerText =""
    }
}

});
// board.addEventListener("click",(event) => {
//     console.log(event.target.id)
// })
// document.getElementById(`#${Math.floor(Math.random() *9)}`).innerText = 'O'

//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.

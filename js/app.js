/*-------------------------------- Constants --------------------------------*/
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
/*---------------------------- Variables (state) ----------------------------*/
let board = ["","","","","","","","",""]
let turn = "X"
let winner = false
let tie = false

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".sqr")
const messageEl = document.querySelector("#message");
const gameBoard = document.querySelector(".board")
// console.log(squareEls);
/*-------------------------------- Functions --------------------------------*/
const checkForWinner =()=>{
    winningCombos.forEach = (element)=>{
        element.forEach = (element)=>{
            
        }
    }
}
const placePieces = (index) =>{
    board[index]= turn 
}
gameBoard.addEventListener("click", (event) => {
    const squareindex =event.target.id
    if (board[squareindex]!== ""|| winner === true){
        return
    }
    placePieces(squareindex)
})
const updateMessage = ()=>{
    if (winner === false && tie === false){
        messageEl.innerText = `it is ${turn}'s turn`
    }
    else if (winner === false && tie === true)
        messageEl.innerText = "you tied"
    else {
        messageEl.innerText = "you won"
    }
}
const handleClick = (event)=>{

}
const updateBoard = ()=>{
    board.forEach((element,index)=>{
        // console.log(squareEls[index])
        squareEls[index].innerText = element
    })
}
const render =()=>{
updateBoard()
updateMessage()
}
const init =()=>{

    render()
}
/*----------------------------- Event Listeners -----------------------------*/

//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.
init()
updateBoard()
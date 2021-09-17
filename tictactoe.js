//left off here at 7:08 https://www.youtube.com/watch?v=B3pmT7Cpi24
//const GameBoardObj = (function () {
    let gameBoard = new Array(9).fill("null");
    console.log(gameBoard);
    
//})();


//Reset Button
document.getElementById("reset").addEventListener('click', resetBtn);

function resetBtn(){
    
    const x= document.querySelectorAll(".board__tile");
    for (let i=0;i<x.length;i++){
        x[i].innerHTML="";
    }
    delete lll;
    lll();
    gameBoard=["null","null","null","null","null","null","null","null","null",];
    //problem wont update display after you press reset
    document.querySelector(".display").innerHTML= `Player <span class="display-player">${currentPlayer}</span>'s turn`;
    document.querySelector(".board").classList.remove("unclick");
    for(let v=0;v<lis_array.length;v++){
        
            lis_array[v].classList.remove("winner"); 
        
    }
}
//Other important functions
//maybe get board to match up with array so you can use the array to check a winner

//Mark board and update array
//document.querySelectorAll("[data-index]").forEach(tile => {
  // this.addEventListener('click', addMarks(tile.dataset.index)) 
//});
  
//problem below:
let currentPlayer= 'X';



function switchTurns(){
 if (currentPlayer==='X') {
     currentPlayer='O';
     document.querySelector('.display-player').innerHTML= currentPlayer;
 } else {
     currentPlayer='X';
     document.querySelector('.display-player').innerHTML= currentPlayer;
 }
}
//update display
//document.querySelector('.display-player').innerHTML= currentPlayer;


let lis= document.querySelectorAll("[data-index]");

let lis_array = Array.from(lis);

function lll() {lis.forEach(function(elem) {
    elem.addEventListener('click', function(e) {
        if(currentPlayer==='X'){
            let i= e.target.dataset.index;
            elem.innerHTML= currentPlayer; 
            //Use to update array:
            
            gameBoard[i]=currentPlayer;
            checkWinner();
            switchTurns();
        } else if (currentPlayer==='O'){
            let i= e.target.dataset.index;
            elem.innerHTML= currentPlayer;
            gameBoard[i]=currentPlayer;
            checkWinner();
            switchTurns();
        }
        console.log("clicked")
}, { once: true });
});
}
lll();
/*function addMarks(i){
    //update array and get x or o to show up on board when yoy uclick
// data-index
    console.log(`tile clicked: ${i}`);
}*/
//problem above

let winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function checkWinner(){
    //if (if the values at these indexes are equal thereś a winner;gameBoard contains all Xs or all Os at the indexes in winningCombinations theres a winner)
for (let j=0;j<winningCombinations.length;j++){
    for (let k=0;k<gameBoard.length;k++){
    
        if(gameBoard[winningCombinations[j][0]]==="null"||gameBoard[winningCombinations[j][1]]==="null"||gameBoard[winningCombinations[j][2]]==="null"){
    console.log('No winner');
        } else if(gameBoard[winningCombinations[j][0]]===gameBoard[winningCombinations[j][1]] &&gameBoard[winningCombinations[j][0]]===gameBoard[winningCombinations[j][2]]){
        console.log('Winner')
        document.querySelector(".display").innerHTML=`Player ${currentPlayer} wins!`;
        document.querySelector(".board").classList.add("unclick");
            //loop through datasets if equal current player then turn green
    
            for(let v=0;v<lis_array.length;v++){
                if(lis_array[v].textContent===currentPlayer){
                    lis_array[v].classList.add("winner"); 
                }
            }
       //lis[gameBoard[winningCombinations[j][0]]];
        //gameBoard[winningCombinations[j][1]];
        //gameBoard[winningCombinations[j][2]];
}
    //for (let i=0;i<gameBoard.length;i++){

    //}
}
}
//return winningCombinations.some(combination => {
  //  return combination.every(index => {
    //    return lis[index].classList.contains(currentPlayer);
  //  })
//})
//}

//if(checkWinner(currentPlayer)){
  //  console.log('winner')
}
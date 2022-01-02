//Gameboard
let gameBoard = new Array(9).fill("null");

//Reset button
document.getElementById("reset").addEventListener('click', resetBtn);

function resetBtn() {

    const x = document.querySelectorAll(".board__tile");
    for (let i = 0; i < x.length; i++) {
        x[i].innerHTML = "";
    }
    delete lll;
    lll();
    gameBoard = ["null", "null", "null", "null", "null", "null", "null", "null", "null",];
    document.querySelector(".display").innerHTML = `Player <span class="display-player">${currentPlayer}</span>'s turn`;
    document.querySelector(".board").classList.remove("unclick");
    for (let v = 0; v < lis_array.length; v++) {

        lis_array[v].classList.remove("winner");

    }
    const gif = document.getElementById('gif');
    gif.src = "";
}

let currentPlayer = 'X';

function switchTurns() {
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
        document.querySelector('.display-player').innerHTML = currentPlayer;
    } else {
        currentPlayer = 'X';
        document.querySelector('.display-player').innerHTML = currentPlayer;
    }
}

let lis = document.querySelectorAll("[data-index]");

let lis_array = Array.from(lis);

function lll() {
    lis.forEach(function (elem) {
        elem.addEventListener('click', function (e) {
            if (currentPlayer === 'X') {
                let i = e.target.dataset.index;
                elem.innerHTML = currentPlayer;
                //Use to update array:
                gameBoard[i] = currentPlayer;
                checkWinner();
                switchTurns();
            } else if (currentPlayer === 'O') {
                let i = e.target.dataset.index;
                elem.innerHTML = currentPlayer;
                gameBoard[i] = currentPlayer;
                checkWinner();
                switchTurns();
            }
            console.log("clicked")
        }, { once: true });
    });
}
lll();

let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner() {

    for (let j = 0; j < winningCombinations.length; j++) {
        for (let k = 0; k < gameBoard.length; k++) {
            if (gameBoard[winningCombinations[j][0]] === "null" || gameBoard[winningCombinations[j][1]] === "null" || gameBoard[winningCombinations[j][2]] === "null") {
                console.log('No winner');
            } else if (gameBoard[winningCombinations[j][0]] === gameBoard[winningCombinations[j][1]] && gameBoard[winningCombinations[j][0]] === gameBoard[winningCombinations[j][2]]) {
                console.log('Winner')
                const audio = new Audio('SMALL_CROWD_APPLAUSE-Yannick_Lemieux-1268806408.mp3')
                audio.play();
                const gif = document.getElementById('gif');
                async function getGif() {
                    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=WiJMmFWVtpn3rFw3Irj2fUDat4U4xFI1&s=victory', { mode: 'cors' })
                    const gifData = await response.json();
                    gif.src = gifData.data.images.original.url;
                }
                getGif();

                document.querySelector(".display").innerHTML = `Player ${currentPlayer} wins!`;
                document.querySelector(".board").classList.add("unclick");
                //loop through datasets if equal current player then turn green
                for (let v = 0; v < lis_array.length; v++) {
                    if (lis_array[v].textContent === currentPlayer) {
                        lis_array[v].classList.add("winner");
                    }
                }

            }
        }
    }
}

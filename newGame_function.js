const newGameButton = document.getElementById('newGame');
const roll = document.getElementById('roll');
const infoPlayer = document.getElementById('info');


let playerOne = null;
let playerTwo = null;
let currentScore1 = 0;
let currentScore2 = 0;
let globalScore1 = 0; 
let globalScore2 = 0;


newGameButton.addEventListener('click', newGame); 
function newGame() {
    infoPlayer.setAttribute('class', 'mr-2 text-white bg-red-500 md:text-2xl sm:text-lg')
    infoPlayer.textContent = 'C\'est parti !';
    roll.addEventListener('click', rollDice);
    hold.addEventListener('click', holdFunction); 
    roll.setAttribute('class', 'cursor-pointer flex font-medium');
    hold.setAttribute('class', 'cursor-pointer flex my-6 font-medium');
    playerOne = true;
    dotPlayer1.setAttribute('class', 'w-2 h-2 md:w-6 h-6 bg-red-600 rounded-full border-black border-solid border mx-3');
    dotPlayer2.setAttribute('class',"");
    playerTwo = false;
    resetGlobalCounter();
    resetCurrentCounter();
}

function resetCurrentCounter () {
    currentScore1 = 0;
    currentCounter1.textContent = currentScore1;
    currentScore2 = 0;
    currentCounter2.textContent = currentScore2;
}

function resetGlobalCounter(){
    globalScore1 = 0; 
    globalCounter1.textContent = globalScore1; 
    globalScore2 = 0;
    globalCounter2.textContent = globalScore2;
}
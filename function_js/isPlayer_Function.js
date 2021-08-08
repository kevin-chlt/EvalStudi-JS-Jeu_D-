const currentCounter1 = document.getElementById('roundPlayer1');
const currentCounter2 = document.getElementById('roundPlayer2');
const dotPlayer1 = document.getElementById('dot-player1');
const dotPlayer2 = document.getElementById('dot-player2');


function isPlayer1(nb) {
    isWinner();
    infoPlayer.setAttribute('class', 'hidden text-white bg-red-500 md:text-2xl sm:text-lg');
    if(playerOne){
        currentScore1 += nb;
        currentCounter1.textContent = currentScore1;
        dotPlayer1.setAttribute('class', 'w-2 h-2 md:w-6 h-6 bg-red-600 rounded-full border-black border-solid border mx-3');
        dotPlayer2.setAttribute('class',"");
    }else if(playerTwo){
        currentScore2 += nb;
        currentCounter2.textContent = currentScore2;
        dotPlayer2.setAttribute('class', 'w-2 h-2 md:w-6 h-6 bg-red-600 rounded-full border-black border-solid border mx-3');
        dotPlayer1.setAttribute('class',"");
    }
}
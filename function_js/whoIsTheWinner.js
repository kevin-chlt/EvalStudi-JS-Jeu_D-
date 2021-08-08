function isWinner() {
    if(globalScore1 >= 100) {
    infoPlayer.setAttribute('class', 'text-white bg-red-500 md:text-2xl sm:text-lg');
    infoPlayer.textContent ='Bravo Joueur 1 ! Tu as gagné ! ';
    resetCurrentCounter();
    resetGlobalCounter();
    removeEvent();
}else if(globalScore2 >= 100) {
    infoPlayer.setAttribute('class', 'text-white bg-red-500 md:text-2xl sm:text-lg');
    infoPlayer.textContent = 'Bravo Joueur 2 ! Tu as gagné !';
    resetCurrentCounter();
    resetGlobalCounter();
    removeEvent();
}}

function removeEvent() {
    roll.removeEventListener('click', rollDice); 
    hold.removeEventListener('click', holdFunction);
    roll.setAttribute('class', 'flex font-medium');
    hold.setAttribute('class', 'flex my-6 font-medium');
    dotPlayer2.setAttribute('class', "");
    dotPlayer1.setAttribute('class',"");
}
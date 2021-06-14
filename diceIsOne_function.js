function diceIsOne() {
    infoPlayer.setAttribute('class', 'text-white bg-red-500 md:text-2xl sm:text-lg');
    resetCurrentCounter();
        if (playerOne){
            playerOne = false;
            playerTwo = true;
            infoPlayer.textContent = 'Joueur 1 à fait 1, Joueur 2 à vous de jouer !';
            dotPlayer2.setAttribute('class', 'w-2 h-2 md:w-6 h-6 bg-red-600 rounded-full border-black border-solid border mx-3');
            dotPlayer1.setAttribute('class',"");
        }else{
            playerOne = true; 
            playerTwo = false; 
            infoPlayer.textContent = 'Joueur 2 à fait 1, Joueur 1 à vous de jouer !';
            dotPlayer1.setAttribute('class', 'w-2 h-2 md:w-6 h-6 bg-red-600 rounded-full border-black border-solid border mx-3');
            dotPlayer2.setAttribute('class',"");
        }
}
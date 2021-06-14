const hold = document.getElementById('hold'); 
const globalCounter1 = document.getElementById('globalCounter1');
const globalCounter2 = document.getElementById('globalCounter2');


hold.addEventListener('click', holdFunction); 

function holdFunction() {
    
    if(playerOne){
        if(currentScore1 < 1){
            infoPlayer.setAttribute('class', 'text-white bg-red-500 md:text-2xl sm:text-lg')
            infoPlayer.textContent = 'Vous ne pouvez pas mettre votre score en  sécurité car il est à 0. Tentez votre chance et jetez les dés !';
        }else{
        globalScore1 += currentScore1;
        globalCounter1.textContent = globalScore1;
        playerOne = false; 
        playerTwo = true;
        dotPlayer2.setAttribute('class', 'w-6 h-6 bg-red-600 rounded-full border-black border-solid border mx-3');
        dotPlayer1.setAttribute('class',"");   
        }

    }else if(playerTwo){
        if(currentScore2 < 1){
            infoPlayer.setAttribute('class', 'text-white bg-red-500 md:text-2xl sm:text-lg')
            infoPlayer.textContent = 'Vous ne pouvez pas mettre votre score en sécurité car il est à 0. Tentez votre chance et jetez les dés !';
        }else
        globalScore2 += currentScore2;
        globalCounter2.textContent = globalScore2;     
        playerTwo = false;
        playerOne = true;   
        dotPlayer1.setAttribute('class', 'w-6 h-6 bg-red-600 rounded-full border-black border-solid border mx-3');
        dotPlayer2.setAttribute('class',""); 
    }
    resetCurrentCounter();
    isWinner();
}


const dice = document.getElementById('dice');
const roll = document.getElementById('roll');
const roundPlayer1 = document.getElementById('roundPlayer1');



roll.addEventListener('click', rollDice);
let round = 0;
function rollDice() {
    let random = Math.ceil(Math.random() * 6); 
    
    switch(random){
    case 1: dice.setAttribute('src', 'images/dice1.svg'); 
    round = 0;
    break;
    case 2: dice.setAttribute('src', "images/dice2.svg");
    round += 2;
    break;
    case 3: dice.setAttribute('src', 'images/dice3.svg');
    round += 3;
    break;
    case 4: dice.setAttribute('src', 'images/dice4.svg'); 
    round += 4;
    break;
    case 5: dice.setAttribute('src', "images/dice5.svg");
    round += 5;
    break;
    case 6: dice.setAttribute('src', 'images/dice6.svg');
    round += 6;
    break; 
    default: prompt('Une erreur est survenu, merci de retenter votre chance');  
}
roundPlayer1.textContent = round;
}







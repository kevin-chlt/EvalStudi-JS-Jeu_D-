const dice = document.getElementById('dice');

function rollDice() {
    let random = Math.ceil(Math.random() * 6); 
    
    switch(random){
    case 1: dice.setAttribute('src', 'images/dice1.svg'); 
    diceIsOne();
    break;
    case 2: dice.setAttribute('src', "images/dice2.svg");
    isPlayer1(2);
    break;
    case 3: dice.setAttribute('src', 'images/dice3.svg');
    isPlayer1(3);
    break;
    case 4: dice.setAttribute('src', 'images/dice4.svg'); 
    isPlayer1(4);
    break;
    case 5: dice.setAttribute('src', "images/dice5.svg");
    isPlayer1(5);
    break;
    case 6: dice.setAttribute('src', 'images/dice6.svg');
    isPlayer1(6);
    break; 
    default: prompt('Une erreur est survenu, merci de retenter votre chance');  
}}







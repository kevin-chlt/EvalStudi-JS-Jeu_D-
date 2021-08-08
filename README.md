## Rendu d'évaluation d'entrainement Studi du 13 juin 2021.
Etant éléve à l'école Studi, j'ai eu accès à une évaluation d'entrainement avant le passage à mon examen.  
Elle portait sur le language HTML ainsi que JS et l'utilisation d'un framework CSS.

### Sujet: Création d'un jeu de dè.

Règles du jeu:  
Le jeu comprend 2 joueurs sur un seul et même écran.
Chaque joueur possède un score temporaire (ROUND) et un score global (GLOBAL). 
À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. Le résultat d’un lancer est ajouté au ROUND.
Lors de son tour, le joueur peut décider à tout moment de cliquer sur l’option “Hold”, qui permet d’envoyer les points du ROUND vers le GLOBAL, ce sera alors le tour 
de l’autre joueur de lancer le dè, s’il obtient un 1, son score ROUND est perdu et c’est la fin de son tour.
Le premier joueur qui atteint les 100 points sur le score global gagne le jeu.


### Présentation du projet

Le projet contient 1 page html et plusieurs fonctions dont: 
=> La fonction "newGame" permettant de lancer une nouvelle partie, de remettre les variable à 0, et de débloquer les boutons d'actions.

=> Un switch "rollDice" qui va déterminer quelle image afficher en fonction de la valeur du dè (entre 1 et 6), d'appeler la fonction "isPlayer1" permettant de savoir à qui va aller 
les points et de rafraichir les compteurs en conséquences, si le joueur à fait 1, le switch appellera la fonction "diceIsOne" qui va reset le compteur ROUND et inversera les 
booléans déterminant à qui est-ce le tour. A chaque tour, la fonction "isWinner" vérifiera si un des deux joueurs à son GLOBAL sup. ou égal à 100.

=>  Si l'un des joueurs clique sur "Hold", la fonction "HoldFunction" s'occupera de changer les booleans des joueurs et de rajouter le score du ROUND à la variable GLOBAL.
 
Le CSS à été réaliser avec Tailwind CSS.
Le projet est responsive est adapté à tous les supports.
Lien du projet: https://salty-island-31251.herokuapp.com/

---------------------------------------------------------------------
![gameDice](https://user-images.githubusercontent.com/83563269/128638310-d5cea7d6-40fb-449c-8407-248158f55f09.PNG)


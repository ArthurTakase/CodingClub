// Déclaration des variables
let snake
let food
let resolution = 20
let hauteur
let largeur

// Fonction donnant un amplacement aléatoire à la nourriture
function foodLocation() {
    let x = /**/
        let y = /**/
            food = createVector(x, y)
}

// Fonction d'initialisation
function setup() {
    createCanvas(400, 400)
    frameRate(5)

    hauteur = floor(height / resolution)
    largeur = floor(width / resolution)

    // Créer un nouveau serpent
    // Mettre un fruit au hasard sur la carte
}

// Fonction récupérant l'entrée utilisateur
function keyPressed() {
    if (keyCode === UP_ARROW) {
        snake.setDir(0, -1);
        /* Ecrire les fonctions down left et right*/
    }
}

// Fonction d'affichage (se lance toutes les x secondes)
function draw() {
    scale(resolution)
    background(220)

    if ( /*si le serpent a mangé la nourriture*/ ) {
        /*Déplacer la nourriture*/
    }

    // Mettre à jour le serpent
    fill(255, 0, 0)
    rect(food.x, food.y, 1, 1)
        // Afficher le serpent

    if (snake.endGame()) {
        print("ENDGAME");
        background(255, 0, 0);
        noLoop();
    }

}
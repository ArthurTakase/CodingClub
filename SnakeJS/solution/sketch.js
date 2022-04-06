// Déclaration des variables
let snake
let food
let resolution = 20
let hauteur
let largeur

// Fonction donnant un amplacement aléatoire à la nourriture
function foodLocation() {
    let x = floor(random(largeur))
    let y = floor(random(hauteur))

    food = createVector(x, y);
}

// Fonction d'initialisation
function setup() {
    createCanvas(400, 400)
    frameRate(5)

    hauteur = floor(height / resolution)
    largeur = floor(width / resolution)

    snake = new Snake();
    foodLocation();
}

// Fonction récupérant l'entrée utilisateur
function keyPressed() {
    if (keyCode === UP_ARROW) {
        snake.setDir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        snake.setDir(0, 1);
    } else if (keyCode === LEFT_ARROW) {
        snake.setDir(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
        snake.setDir(1, 0);
    }
}

// Fonction d'affichage (se lance toutes les x secondes)
function draw() {
    scale(res);
    background(220);

    if (snake.eat(food))
        foodLocation();

    snake.update();
    fill(255, 0, 0);
    rect(food.x, food.y, 1, 1);
    snake.show();

    if (snake.endGame()) {
        print("ENDGAME");
        background(255, 0, 0);
        noLoop();
    }
}
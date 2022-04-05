let snake;
let res = 20;
let food;
let w;
let h;

function setup() {
    createCanvas(400, 400);

    w = floor(width / res);
    h = floor(height / res)

    frameRate(5);

    snake = new Snake();
    food = new Food()
}

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

function draw() {
    scale(res);
    background(220);

    if (snake.eat(food))
        food = new Food()

    snake.update();
    food.show();
    snake.show();

    if (snake.endGame()) {
        print("ENDGAME");
        background(255, 0, 0);
        noLoop();
    }
}
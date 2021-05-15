let canvas;
let player;

let obstacles = [];

function preload() {
    //assets
}

function setup() {
    canvas = createCanvas(900, 500);
    canvas.parent("canvas");

    createWelcome();

    player = new Player(100, 200);

    for (let i = 0; i < STARTER_OBS.length; i++) {
        obstacles.push(new Obstacle(STARTER_OBS[i].x, STARTER_OBS[i].y, STARTER_OBS[i].width, STARTER_OBS[i].height));
    }

    frameRate(40);
}

function draw() {
    update();

    background("#333");

    player.draw();

    for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].draw();
    }
}

function update() {
    player.update()

    for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].update();
    }
}

function createWelcome() {
    let welcome = createDiv("Welcome to my site");
    welcome.style("font-size", "60px");
    welcome.style("color", "#8C8C8C8D");
    welcome.position(width / 2, height / 2 - 20);
}
let unicorn;
let uImage;
let eImage;
let bImage;
let kImage;
let gooddog;
let enemy = []
let score = 0;
let kWidth = 0;
let scoreLimitations = 1000;

function preload() {
    uImage = loadImage("unicorn.png");
    eImage = loadImage("enemy.png");
    bImage = loadImage("background.png");
    kImage = loadImage("1ksymbol.png");
    gooddog = loadFont("gooddog.TTF");
}

function setup() {
    createCanvas(800, 500)
    unicorn = new Unicorn();
  
    frameRate(30);
}

function keyPressed() {
    if (key == ' ') {
        unicorn.unicornJump();
    }
}

function addThousand()  {
          image(kImage, 5 + kWidth, 0 + 35, 32, 32);
        scoreLimitations += 1000;
}





function draw() {
    background(bImage);
    unicorn.show();
    unicorn.move();
    
    
    if (random(1) < 0.005) {
      enemy.push(new Enemy());
    }
  
    for (let e of enemy) {
      e.moveEnemy();
      e.show();
      
      
      //if (unicorn.hit) {
        
        //console.log("Game Over")
        //textSize(100);
        //textStyle(BOLD);
        //textFont(gooddog);
        //text("GAME OVER", width / 2, height / 2);
        //noLoop();
      //}
      
      textSize(30);
      textStyle(BOLD);
      textFont(gooddog);
      text("Score: " + score, width - 250, 50);
      
      if (score == scoreLimitations) {
          addThousand();
         score = 0;
              } else {score++}
      
      
      
      
  }
  
  
  
  
  
  
  
  
  
  
    
}
    
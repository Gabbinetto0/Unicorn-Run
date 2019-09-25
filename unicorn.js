class Unicorn {
    constructor() {
        this.r = 75;
        this.x = 50;
        this.y = height - this.r;
        this.vy = 0;
        this.gravity = 2.005;
    }

    unicornJump() {
        if (this.y == height - this.r) {
          this.vy = -25;
        }
    }
  
   hit(Enemy) {
    
    return collideCircleCircle(this.x,this.y,this.r,enemy.x,enemy.y,enemy.r)
    
  }

    move() {
        this.y += this.vy;
        this.vy += this.gravity
        this.y = constrain(this.y, 0, height - this.r);
    }

  
 
  
  

    show() {
        image(uImage,this.x, this.y, this.r, this.r, 3);
    }
}
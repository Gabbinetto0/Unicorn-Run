class Enemy {
  constructor() {
        this.r = 75;
        this.x = width;
        this.y = height - this.r;
    

  }
  
  
        moveEnemy() {
          this.x -= 8;
    }
  
  
    
    show() {
        image(eImage, this.x, this.y, this.r, this.r);
    }
}
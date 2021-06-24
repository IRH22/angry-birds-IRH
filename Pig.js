class Pig extends Base {
  constructor(x, y){
    super(x, y, 50, 50);
    this.image = loadImage("Imagenes/enemy.png");
    this.vis = 255
    
  }
  display(){
    if(this.body.speed < 5){
      super.display();
      }
    else{
      push();
      this.vis = this.vis-5;
      console.log(this.vis);

      tint(255, this.vis);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      World.remove(world, this.body);
      pop();
      
    }
    
  }

}
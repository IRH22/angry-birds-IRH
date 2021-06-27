class Bird extends Base{
  constructor( x, y){
      super(x, y, 50, 50);
      this.image = loadImage("Imagenes/bird.png");  
      this.humo = loadImage("Imagenes/smoke.png");
      this.trayectoria = [];
  }

  display() {

  super.display();
  if (this.body.velocity.x>7 && this.body.position.x > 130 ){
    var pos = [this.body.position.x,this.body.position.y];
    this.trayectoria.push(pos);
  }
  for(var i = 0; i<this.trayectoria.length; i++){
    image(this.humo, this.trayectoria[i][0], this.trayectoria[i][1])
  }

  if(this.body.position.x < 130){
    this.trayectoria = [];
  }

  
}
}
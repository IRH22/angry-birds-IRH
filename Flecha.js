class Flecha{
    constructor(){
       
       this.arrow= loadImage("Imagenes/flecha.png");
      
       World.add(world, this.arrow)
    }
    
    
    display(){
       image(this.arrow, 350, 50);  
       
    }
  
}
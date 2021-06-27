class Flecha{
    constructor(){
       
       this.arrow= loadImage("Imagenes/flecha1.png");
      
       World.add(world, this.arrow)
    }
    
    
    display(){
       image(this.arrow, 350, 5);  
       
    }
  
}
class Resortera{
    constructor(bodyA,pointB){
       var options = {
         bodyA:bodyA,
         pointB:pointB,
         stiffness:0.04,
         length:10
       }
       this.sling1= loadImage("Imagenes/sling1.png");
       this.sling2= loadImage("Imagenes/sling2.png");
       this.sling3= loadImage("Imagenes/sling3.png");
       this.pointB= pointB;
       this.slings= Constraint.create(options);
       World.add(world, this.slings)
    }
      fly(){
        this.slings.bodyA = null;
      }
      
      regresa(body){
        this.slings.bodyA = body;
      }
    
    display(){
       image(this.sling1, 150, 55);  
       image(this.sling2, 125, 55);
       if(this.slings.bodyA){
         var pointA = this.slings.bodyA.position
         var pointB = this.pointB
         push();
         strokeWeight(10);
         line(pointA.x-20, pointA.y, pointB.x+50, pointB.y+10);
         line(pointA.x-20, pointA.y, pointB.x+80, pointB.y+5);
         pop();
       }
    }
  
}
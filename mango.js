class Mango { 
    constructor(x,y){
    
    var options = {
        isStatic: true,
        restitution : 0,
        friction : 1,
        density : 1.0
    }
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.body = Matter.Bodies.rectangle(this.x, this.y,this.width,this.height, options);
    World.add(world,this.body);
   
   

   this.image = loadImage("Plucking mangoes/mango.png");
    
    }
    
    display(){
        var pos = this.body.position;

        push()
        translate(pos.x,pos.y)
        imageMode(CENTER);
        //strokeWeight(2);
		//fill(0,255,0)
        image(this.image,0,0,this.width,this.height);
        pop()
    }
}
class Boy {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
     
      this.x=x;
      this.y=y;
      this.width = 200;
      this.height = 250;
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world, this.body);

      this.image = loadImage("Plucking mangoes/boy.png")

    }
    display(){
      
      var groundpos =this.body.position;
      push()
      translate(groundpos.x,groundpos.y)
      imageMode(CENTER);
      //strokeWeight(4);
	  //fill(0,0,0)
      image(this.image,0,0, this.width, this.height);
      pop()
    }
  }
class DustBin {  
    constructor( x, y, width, height){
        var options = {
            'isStatic' : true
        }

        this.base = Bodies.rectangle(x,y, width, height,options );
	    World.add(world, this.base);
	    this.left= Bodies.rectangle((x-(width/2)), (y-(height*2)), height, width/2 ,options);
	    World.add(world, this.left);
	    this.right = Bodies.rectangle((x+(width/2)), (y-(height*2)), height, width/2 ,options);
        World.add(world, this.right);
        this.base.width = width
        this.base.height = height 
        
   }
   display(){
       fill("red");
       rect(this.base.position.x, this.base.position.y,this.base.width, this.base.height)
       rect((this.base.position.x-(this.base.width/2)), (this.base.position.y-(this.base.height*(2*(this.base.width/100)))), this.base.height, this.base.width/2)
      rect((this.base.position.x+(this.base.width/2)), (this.base.position.y-(this.base.height*(2*(this.base.width/100)))), this.base.height, this.base.width/2)
   }
}
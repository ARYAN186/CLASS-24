class Pig{ 
    constructor(x,y){
    
        var box_options={
            restitution : 1
            
        }
        this.color="pink";
        this.box = Bodies.rectangle(x,y,50,50,box_options);
        this.width=50;
        this.height=50;
        World.add (world,this.box);
        }
 
     display_pig(){
        var pos =this.box.position;
        var angle = this.box.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("black");
        fill(this.color);
        rect(0, 0, this.width, this.height);
        pop();
        }

}







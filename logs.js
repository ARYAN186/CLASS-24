class Log{ 
    constructor(x,y,height,angle){
    
        var box_options={
            restitution : 1
            
        }
        this.color="pink";
        this.box = Bodies.rectangle(x,y,25,height,box_options);
        this.width=25;
        this.height=height;
        Matter.Body.setAngle(this.box,angle);
        World.add (world,this.box);
        }
 
     display_logs(){
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







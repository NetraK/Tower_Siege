class Block{
    constructor(x, y, width, height){
        var options = {
            'restitution':0.4,
            'friction':0.0
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        //this.x=x;
        //this.y=y;
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var angle=this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("blue");
        //var rand=Math.round(random(1,4));
        //if(rand==1||rand==4){
        //    fill("pink");
        //}
        //else if(rand==2){
        //    fill("blue");
        //}
        //if(rand==3){
        //    fill("green");
        //}
        stroke("white");
        strokeWeight(2);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
      }
  
  };
  
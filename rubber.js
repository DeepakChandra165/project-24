class rubber{

    constructor(x,y){
        var options = {
            'restitution':0.5,
            'friction':5.0,
            'density':1.0
        }
       this.body = Bodies.circle(x,y,30,options);

       this.radius = 30;

       
       World.add(world,this.body);
    }
 display(){

    var pos = this.body.position;
    
    
     var angle = this.body.angle;
     push();
    translate(pos.x,pos.y);
    rotate(angle);

    rectMode(CENTER);
    strokeWeight(3);
    stroke("black");
    fill("red");
    ellipse(0,0,this.width,this.height);

    pop();

 }
}
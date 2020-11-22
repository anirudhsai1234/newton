class Ball{
    constructor(x, y, r) {
        var options = {
            'restitution':1.0,
            'friction':0.0,
            'density':0.8
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(x, y,(this.r)/2, options);
    
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        push();
      //  translate(pos.x,pos.y)
        fill("red");
        ellipseMode(RADIUS);
         ellipse(pos.x,pos.y,this.r, this.r);
     pop();
      }
    }
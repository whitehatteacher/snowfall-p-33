class Snow{
    constructor(x, y,  radius) {
        var options = {
            
            'friction':1.0,
            'density':0.3
        }
        this.body = Bodies.circle(x, y, radius, options);
        //this.width = width;
        //this.height = height;
        this.radius = radius;
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
      }
      fallingdrops(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
      }
      updateY () {
        console.log ("UPDATE Y");
        if(this.body.position.y > 350){
       
            Matter.Body.setPosition(this.body, {x:random(0,800), y:random(0,400)});
            //Matter.Body.setPosition(this.body, {x:random(0,800), y:0});

        }
      }
}
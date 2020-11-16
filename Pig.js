class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility = 255;
    // 1 byte = 8 bits 
    // 1 bit = 1/0 binary language
  }

  display(){
    console.log(this.body.speed);
    if(this.body.speed < 3){
      super.display();
    }
    else{
      
      
      // do not display
      World.remove(world,this.body);
      //store the canvas in your memory 
      push();
      this.visibility= this.visibility-5;
      tint(255, this.visibility);
      image(this.image, this.body.position.x, this.body.position.y,50,50);
      //display whatever is stored in your memory
      pop();
    }
  }

};
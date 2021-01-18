class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,100,100,angle);
    this.image = loadImage("balloon2.jpg");
    Matter.Body.setAngle(this.body, angle);
  }
}
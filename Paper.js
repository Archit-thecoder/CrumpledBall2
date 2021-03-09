class Paper{
    constructor(){
        var option = {
            restitution:0.8,
            friction:0.3,
            density:1.2
        }
        this.image = loadImage("paper.png")
        this.body = Bodies.circle(50,380,20,option)
        World.add(world,this.body)
    }
    display(){
       push()
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,70,70)
       pop()
    }
}



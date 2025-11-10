class Coordinate{

    x;
    y;

    constructor(x, y){

        this.x = x
        this.y = y
    }

    isInBounds(x, y, w, h){

        if(this.x < x || this.x > x + w || this.y < y || this.y > y + h){

            return false
        } else {

            return true
        }
    }
}

let coordinate = new Coordinate(0, 0)

function setup(){

    createCanvas(400,400)

}

function draw(){

    coordinate.x = mouseX
    coordinate.y = mouseY
    //console.log(coordinate.x)
    //console.log(coordinate.y)
    //console.log(coordinate.isInBounds(0, 0, width, height))
}

function mousePressed(){

    if(coordinate.isInBounds(0, 0 ,width, height)){

        ellipse(random(0,width), random(0, height), random(50,100), random(50,100))
    }
}
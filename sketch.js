var x=100
var y=300
var squarex = 0
var squarey = 0
function setup() {
  createCanvas(800, 600);
}

function draw() {
    fill(24, 200, 29);
    background(0);
    fill(255, 204, 100);
    circle(x,y,100);
    fill(255,0,0);
    rect(700,0,100,800);
    fill(0,255,0);
    square(400, 150, 100);
    fill(0,0,255);
    square(400, 400, 150);
    fill(0,255,0);
    square(squarex, squarey, 100);
    victory();

}


function keyPressed(){
    if (key == "w"){
        y -= 5;
    }
    else if (key == "s"){
        y += 5;
    }
    else if (key == "a"){
        x -= 30;
    }
    else if (key == "d"){
        x += 30;
    }
}
function victory(){
    if (x>=750){
    fill(0,255,0);
    stroke(5);
    textSize(30);
    text("You Win!", 400, 300);
    }
}    


function mouseClicked(){
    squarex = mouseX;
    squarey = mouseY;

}
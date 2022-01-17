var box1, box2;

function setup(){
    box1 = new Box(87,79,100,100,5,5);
    box2 = new Box(67,43,200,200,7,7);
}

function draw(){
    background("black");
    
    box1.show();
    box2.show(); 

    box1.setSpeed(2);
    box2.setSpeed(5);
}
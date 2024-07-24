function setup() {
  createCanvas(600, 600);
  background("black");
}

function draw() {
  
  stroke ("yellow");
  fill ("green");
  
   //console.log(mouseIsPressed);
    
  if (mouseIsPressed) {   
    rect ( mouseX, mouseY, 30, 40);
  } 
} 

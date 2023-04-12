//defining the positions, speeds, and directions
let x 
let y
let speedX
let speedY
let directionX
let directionY
let listOfBalls = []
let colorList = []
let someRandomBall = {
  x: 50,
  y: 100,
  speedX: 4,
  color: "orange"
}
function setup() {
  createCanvas(500, 400); // made canvas non-square to make path more random
  //calling functions 
  speedX = 1
  speedY = 1
  x = random(25, 475)//random min and max values for x
  y = random(25, 375)//random min and max values for y
  directionX = 1
  directionY = 1
  // noLoop()
  colorList = ["red", "green", "blue"]
  for(let i = 0; i < 10; i++)
    listOfBalls.push({
      x: random(width),
      y: random(height),
      speedX: random(1, 5),
      speedY: random(1, 5),
      color: random(colorList)
    })
}

function draw() {
  background(220);
  //setting speed and checking for direction
  
  for (let drawBall = 0; drawBall < 10; drawBall++){
    drawSprite(listOfBalls[drawBall].x, listOfBalls[drawBall].y)
    listOfBalls[drawBall].x += listOfBalls[drawBall].speedX * directionX
    listOfBalls[drawBall].y += listOfBalls[drawBall].speedY * directionY
    if (listOfBalls[drawBall].x>=width-25 || listOfBalls[drawBall].x <=25){ // changing direction on x axis
      listOfBalls[drawBall].speedX *= -1;
    }  
    if (listOfBalls[drawBall].y>height-25 || listOfBalls[drawBall].y <25){ // changing direction on y axis
      listOfBalls[drawBall].y *= -1;
    }
  }
}

function drawSprite(x, y){//drawing sprite and translating it to the random x and y positions
  push();
  translate(x, y);
  fill("blue");
  ellipse(0, 0, 50);
  pop();
}


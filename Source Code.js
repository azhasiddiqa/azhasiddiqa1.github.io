let angle = 0;
let dots = [];

function setup() {
  createCanvas(500, 500);
  background('#202B0A');
  angleMode(DEGREES);
}

function draw() {
  if (dots.length < 500000) {
    for (i = 0; i < 500; i++) {
      let x = random(0, width);
      let y = random(0, height);
      if (sqrt(pow(x - width / 2, 2) + pow(y - height / 2, 2)) <= 250) {
        stroke('#1f567c');
        point(x, y);
        dots.push(createVector(x, y));
      }
    }
  } else {
    Snowflake();
    noLoop();
  }
}

//Snowflake
function Snowflake() {
  translate(250, 250);
  stroke('rgb(83,163,163)');
  strokeWeight(4);
  for (let a = 0; a < 360; a += 60) {
    //Arms
    let x1 = 0;
    let y1 = 0;
    let x2 = 150 * cos(a);
    let y2 = 150 * sin(a);
    line(x1, y1, x2, y2);
    //Arms

    //Stubs at the ends
    let stub1_x = x2 + 40 * cos(a + 30);
    let stub1_y = y2 + 40 * sin(a + 30);
    let stub2_x = x2 + 40 * cos(a - 30);
    let stub2_y = y2 + 40 * sin(a - 30);

    line(x2, y2, stub1_x, stub1_y);
    line(x2, y2, stub2_x, stub2_y);
    //Stubs at the ends

    //Stubs in the middle
    let x3 = 50 * cos(a);
    let y3 = 50 * sin(a);
    let stub3_x = x3 + 60 * cos(a + 30);
    let stub3_y = y3 + 60 * sin(a + 30);
    let stub4_x = x3 + 60 * cos(a - 30);
    let stub4_y = y3 + 60 * sin(a - 30);

    line(x3, y3, stub3_x, stub3_y);
    line(x3, y3, stub4_x, stub4_y);
    //Stubs in the middle
  }
}
//Snowflake

const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const pen = canvas.getContext('2d');
const maxRadius = 40;
const colorArray = [
  '#4E6B15',
  'red',
  '#274C77',
  '#485059',
  '#959DA2'
]
const mouse = {
  x: undefined,
  y: undefined
}

window.addEventListener(
  'mousemove', 
  function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
  }
);

window.addEventListener(
  'resize',
  function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
  }
)

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = this.radius;
  this.color = colorArray[Math.floor(Math.random()*5)];

  this.draw = function() {
    pen.beginPath();
    pen.arc(this.x, this.y, this.radius, Math.PI*2, false);
    pen.fillStyle = this.color;
    pen.fill();
  }

  this.update = function() {
    if ( this.x + this.radius > innerWidth ) {
      this.dx = -this.dx; 
    } else if ( this.x - this.radius < 0 ) {
      this.dx = -this.dx;
    }
  
    if ( this.y + this.radius > innerHeight ) {
      this.dy = -this.dy; 
    } else if ( this.y - this.radius < 0 ) {
      this.dy = -this.dy;
    }
  
    this.x += this.dx;
    this.y += this.dy;

    if ( 
      Math.abs(mouse.x - this.x) < 50 
      && Math.abs(mouse.y - this.y) < 50 
    ) {
      if ( this.radius < maxRadius ) this.radius += 1;
    } else if ( this.radius > this.minRadius ) {
      this.radius -= 1;
    }
    this.draw();
  }
}

let circleArray = [];

function init() {
  circleArray = [];
  for ( let i = 0 ; i < 800 ; i++ ) {
    const radius = Math.floor(Math.random()*3 + 1);
    const diameter = radius*2;
    const x = Math.random() * (innerWidth - diameter) + radius;
    const y = Math.random() * (innerHeight - diameter) + radius;
    const dx = (Math.random()-0.5) * 10;
    const dy = (Math.random()-0.5) * 10;
    const circle = new Circle(x, y, dx, dy, radius);
    circleArray.push(circle);
  }
}

function animate() {
  window.requestAnimationFrame(animate);
  pen.clearRect(0, 0, innerWidth, innerHeight);
  circleArray.forEach(c => c.update());
}

init();
animate();
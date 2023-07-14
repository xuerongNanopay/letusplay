const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const pen = canvas.getContext('2d');

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    pen.beginPath();
    pen.arc(this.x, this.y, this.radius, Math.PI*2, false);
    pen.strokeStyle = 'blue';
    pen.stroke();
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
  
    this.x += this.dx
    this.y += this.dy
    this.draw();
  }
}

var circleArray = [];
for ( let i = 0 ; i < 100 ; i++ ) {
  const radius = 30;
  const diameter = radius*2;
  const x = Math.random() * (innerWidth - diameter) + radius;
  const y = Math.random() * (innerHeight - diameter) + radius;
  const dx = (Math.random()-0.5) * 10;
  const dy = (Math.random()-0.5) * 10;
  const circle = new Circle(x, y, dx, dy, radius);
  circleArray.push(circle);
}

function animate() {
  window.requestAnimationFrame(animate);
  pen.clearRect(0, 0, innerWidth, innerHeight);
  circleArray.forEach(c => c.update());
}

animate();
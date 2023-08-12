import { randomIntFromRange, randomColor, distance } from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const gravity = 1;
const fraction = 0.95;
const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})

addEventListener('click', () => {
  init();
})

// Objects
class Ball {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x
    this.dx = dx;
    this.y = y
    this.dy = dy;
    this.radius = radius
    this.color = color
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.stroke()
    c.closePath()
  }

  update() {
    if ( this.y + this.radius + this.dy > canvas.height ) {
      this.dy = -this.dy * fraction;
    } else {
      this.dy += gravity;
    }

    if ( this.x + this.radius + this.dx > canvas.width ||
      this.x - this.radius <= 0
    ) {
      this.dx = -this.dx;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw()
  }
}

// Implementation
let ballArray = [];
function init() {
  ballArray = [];
  for ( let i = 0 ; i < 100 ; i++ ) {
    const radius = randomIntFromRange(15, 30);
    const x = randomIntFromRange(radius, canvas.width-radius);
    const y = randomIntFromRange(0, canvas.height-radius);
    const dx = randomIntFromRange(-2, 2);
    const dy = randomIntFromRange(-2, 2)
    ballArray.push(new Ball(x, y, dx, dy, radius, randomColor(colors)));
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)
  ballArray.forEach(b => b.update());
}

init()
animate()

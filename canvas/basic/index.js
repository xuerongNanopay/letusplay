const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var pen = canvas.getContext('2d');

pen.fillStyle = 'rgba(255, 0, 0, 0.5)'
pen.fillRect(100, 100, 100, 100);
pen.fillStyle = 'rgba(0, 0, 255, 0.5)'
pen.fillRect(400, 100, 100, 100);
pen.fillStyle = 'rgba(0, 255, 0, 0.5)'
pen.fillRect(300, 300, 100, 100);

// Line
pen.beginPath();
pen.moveTo(50, 300);
pen.lineTo(300, 100);
pen.lineTo(400, 300);
pen.lineTo(500, 400);
pen.strokeStyle="#fa34a3"
pen.stroke();

pen.beginPath();
pen.arc(300, 300, 30, 0, Math.PI*2, false);
pen.strokeStyle="blue"
pen.stroke();

for ( let i = 0 ; i < 10; i++ ) {
  pen.beginPath();
  pen.arc(30*i*2+30, 500, 30, Math.PI*2, false);
  pen.stroke();
} 
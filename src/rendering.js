const canvasHeight = 600;
const canvasWidth = 800;

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

const drawRect = (posX, posY, w, h, color) => {
    ctx.beginPath();
    ctx.rect(Math.round(posX), Math.round(posY), w, h);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
};

const drawCircle = (posX, posY, radius, angle, color) => {
    ctx.beginPath();
    ctx.arc(posX, posY, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.moveTo(posX, posY);
    const dX = radius * Math.sin((Math.PI * 2 * angle) / 360);
    const dY = radius * Math.cos((Math.PI * 2 * angle) / 360);
    ctx.lineTo(posX + dX, posY - dY);
    ctx.stroke();
};

const clearCanvas = () => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
};

export { clearCanvas, drawCircle, drawRect };

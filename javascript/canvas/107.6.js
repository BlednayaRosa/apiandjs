let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');


ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(125, 75);
ctx.moveTo(150, 50);
ctx.lineTo(125, 25);
ctx.stroke();
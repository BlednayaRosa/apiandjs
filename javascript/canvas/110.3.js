function getRadians(degrees) {
	return (Math.PI / 180) * degrees;
}

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');


ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(150, 150);
ctx.lineTo(50, 150);
ctx.fillStyle = 'green';
ctx.fill();
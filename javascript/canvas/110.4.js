function getRadians(degrees) {
	return (Math.PI / 180) * degrees;
}

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath()
ctx.moveTo(50, 50);
ctx.lineTo(80, 50);
ctx.lineTo(80, 80);
ctx.lineTo(50, 80);
ctx.fillStyle = 'green';
ctx.fill();


ctx.beginPath()
ctx.moveTo(50, 100);
ctx.lineTo(80, 100);
ctx.lineTo(80, 130);
ctx.lineTo(50, 130);
ctx.fillStyle = 'red';
ctx.fill();

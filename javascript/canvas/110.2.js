function getRadians(degrees) {
	return (Math.PI / 180) * degrees;
}

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.stroke();


ctx.beginPath()
ctx.strokeStyle = 'green';
ctx.moveTo(50, 60);
ctx.lineTo(150, 60);
ctx.stroke();
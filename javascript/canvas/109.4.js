function getRadians(degrees) {
	return (Math.PI / 180) * degrees;
}

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');


ctx.arc(100, 100, 50, 0, getRadians(180));
ctx.moveTo(50, 100);
ctx.lineTo(150, 100);
ctx.stroke();
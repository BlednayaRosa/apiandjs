function getRadians(degrees) {
	return (Math.PI / 180) * degrees;
}

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');


ctx.arc(100, 100, 50, 0, getRadians(360));
ctx.fill();
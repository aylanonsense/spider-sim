//configure requirejs
requirejs.config({ baseUrl: '/' });

//start client
requirejs([
	'javascripts/Game',
	'javascripts/Constants'
], function(
	Game,
	Constants
) {
	//set up canvas
	var canvas = document.getElementById("game-canvas");
	canvas.setAttribute("width", Constants.CANVAS_WIDTH);
	canvas.setAttribute("height", Constants.CANVAS_HEIGHT);
	var ctx = canvas.getContext("2d");

	//kick off game loop
	var prevTime = performance.now();
	Game.reset();
	function loop(time) {
		Game.tick((time - prevTime) / 1000);
		Game.render(ctx);
		prevTime = time;
		requestAnimationFrame(loop);
	}
	requestAnimationFrame(loop);

	//add mouse handler
	canvas.onmousedown = sendMouseEvent;
	document.onmouseup = sendMouseEvent;
	canvas.onmousemove = sendMouseEvent;
	function sendMouseEvent(evt) {
		evt.gameX = evt.clientX - canvas.offsetLeft + document.body.scrollLeft;
		evt.gameY = evt.clientY - canvas.offsetTop + document.body.scrollTop;
		Game.onMouseEvent(evt);
	}
});
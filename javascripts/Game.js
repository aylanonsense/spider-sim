define([
	'javascripts/Constants'
], function(
	Constants
) {
	var dots = [];

	return {
		reset: function() {

		},
		tick: function(t) {

		},
		render: function(ctx) {
			ctx.fillStyle = '#000';
			ctx.fillRect(0, 0, Constants.CANVAS_WIDTH, Constants.CANVAS_HEIGHT);

			for(var i = 0; i < dots.length; i++) {
				ctx.fillStyle = dots[i].color;
				ctx.fillRect(dots[i].x, dots[i].y, 5, 5);
			}
		},
		onMouseEvent: function(evt) {
			dots.push({
				x: evt.gameX,
				y: evt.gameY,
				color: {
					'mouseup': '#f00',
					'mousedown': '#0f0',
					'mousemove': '#00f'
				}[evt.type]
			});
		}
	};
});
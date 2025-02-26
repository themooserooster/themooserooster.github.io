(function () {
  
	var canvas = document.getElementById('fountain-canvas');
	var context = canvas.getContext('2d');
	var NUM_KITTEHS = 25;
	// var KITTEH_SOURCE = "/content/kitty.png";
	var KITTEH_SOURCE = "/content/john2.png";
	var gravity = 0.05;
  
	function Kitteh (startX, startY, image) {
		this.init(startX, startY);
		this.image = image;
	}

	Kitteh.prototype.init = function(startX, startY) {
	  	this.x = startX;
		this.y = startY;
		this.vx = (Math.random() * 8) - 4;
		this.vy = (Math.random() * -10);
	}

	Kitteh.prototype.draw = function (ctx) {
		ctx.drawImage(this.image, this.x, this.y);
		this.x += this.vx;
		this.vy += gravity;
		this.y += this.vy;

		if (this.y > ctx.canvas.height) {
			this.init(ctx.canvas.width/2, ctx.canvas.height);
		}
	};

	var kittyImage = new Image();
	kittyImage.src = KITTEH_SOURCE;
	var kittehs = [];
	kittyImage.onload = function () {
		var originX = context.canvas.width/2;
		var originY = context.canvas.height;
		for (var i = 0; i < NUM_KITTEHS; i++) {
			kittehs[i] = new Kitteh(
				originX,
				originY,
				kittyImage
			);
		}
		requestAnimationFrame(drawLoop);
	};
  

	var drawLoop = function () {
		context.clearRect(0, 0, context.canvas.width, context.canvas.height);

		for (var i = 0; i < kittehs.length; i++) {
		kittehs[i].draw(context);
		}
		//console.log('drawing...');
		requestAnimationFrame(drawLoop);
	}

})();
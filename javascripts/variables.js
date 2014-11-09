var game = (function() {
	var canvas = document.querySelector("canvas"),
		context = canvas.getContext("2d");

	var directions = {
		up: "up",
		down: "down",
		left: "left",
		right: "right"
	};

	var keyCodes = {
		up: 38,
		down: 40,
		left: 37,
		right: 39,
		space: 32,
		q: 81,
		e: 69
	};

	var player = {
		color: "white",
		positions: {
			x: 0,
			y: 0
		},
		width: 55,
		height: 70,
		movingDirectionX: undefined,
		movingDirectionY: undefined,
		movingSpeed: 5,
		weaponArsenal: [{
			type: "normal",
			color: "white",
			radius: 2,
			movingSpeed: 12,
			isChargable: true
		}, {
			type: "bomb",
			color: "red",
			radius: 100,
			damage: 200,
			movingSpeed: 6,
			isChargable: false
		}],
		selectedWeaponIndex: 0,
		isCharging: false,
	};

	var weaponArsenalPositions = {
		FIRST_WEAPON: 0,
		LAST_WEAPON: player.weaponArsenal.length - 1
	};

	/* DO WE NEED THIS? */
	var movingRestrictionBarrier = {
		color: "gray",
		x: 0,
		y: 450,
		width: canvas.width,
		height: 1
	};

	var bullets = [];

	var enemyBlocks = {};

	var enemyIdCounter = 0;

	var collision = {};

	var render = {};

	var images = (function() {
		var backgroundImage = new Image();

		backgroundImage.src = "sprites/background.jpg";

		var background = {
			image: backgroundImage,
			x: 0,
			y: 0,
			movingSpeed: 2
		};

		var shipImage = new Image();

		shipImage.src = "sprites/ship.png";

		var ship = {
			image: shipImage
		};

		return {
			background: background,
			ship: ship
		};
	}());

	return {
		canvas: canvas,
		canvasContext: context,
		directions: directions,
		keyCodes: keyCodes,
		player: player,
		weaponArsenalPositions: weaponArsenalPositions,
		movingRestrictionBarrier: movingRestrictionBarrier,
		bullets: bullets,
		enemyBlocks: enemyBlocks,
		collision: collision,
		render: render,
		images: images,
		getNewEnemyId: function() {
			return enemyIdCounter++;
		}
	};
}());
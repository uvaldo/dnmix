var Game = function Game() {
	"use strict";

	Game.start = function () {
		this.clock = new Dnmix.Clock();
		console.log("Clock started, delta: " + Game.clock.getDelta());
	};

	/**
	 * Append dom elements to the container
	 * @param domElement
	 */
	Game.appendContainer = function (domElement) {
		this.container.appendChild(domElement);
	};

	Game.addScene = function (obj) {
		this.scene.add(obj.mesh);
	};

	Game.addGameObject = function (obj) {
		this.objects.unshift(obj);
		this.addScene(obj);
		return true;
	};

	Game.container = document.getElementById("container");
	Game.renderer  = new Dnmix.Renderer();
	Game.scene     = new Dnmix.Scene();
	Game.camera    = Dnmix.CameraFactory.createPerspectiveCamera();
	Game.clock     = null;
	Game.objects   = [];

	return Game;
};




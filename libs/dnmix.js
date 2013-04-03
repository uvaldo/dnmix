var Dnmix = {};

Dnmix.Geometry = {};
Dnmix.Asset    = {};

/**
 * Basic (most) game object
 * @type {{update: Function}}
 */
Dnmix.Object = {
	update: function () {}
};

Dnmix.Renderer = function () {
//	var renderer = new THREE.CanvasRenderer();
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	return renderer;
};

Dnmix.Clock = function () {
	return new THREE.Clock(true);
};

Dnmix.Scene = function () {
	return new THREE.Scene();
};


Dnmix.Geometry.Cube = function (settings) {

	settings = settings || {
		width:  200,
		height: 200,
		depth:  200,
		color:  0xff0000
	};

	var CubeMesh = function (settings) {
		var geometry = new THREE.CubeGeometry(settings.width, settings.height, settings.height);
		var material = new THREE.MeshBasicMaterial({
			color: settings.color,
			wireframe: true
		});

		return new THREE.Mesh(geometry, material);
	};

	var cube = THREE.extend({
		mesh: CubeMesh(settings)
	}, Dnmix.Object);

	cube.mesh.position.set(Math.random() * 800 - 400, Math.random() * 800 - 400, Math.random() * 800 - 400);

	return cube;
};


Dnmix.Asset.RotatingCube = function (settings) {
	var cube = new Dnmix.Geometry.Cube(settings);
	cube.update = function () {
		this.mesh.rotation.x += 0.01;
		this.mesh.rotation.y += 0.02;
		this.mesh.rotation.z += 0.015;
	};

	return cube;
};

Dnmix.CameraFactory = {
	createPerspectiveCamera: function () {
		var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
		camera.position.z = 2000;

		return camera;
	}
};

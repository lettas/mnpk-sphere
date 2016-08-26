(function() {
  function createCanvas(sphereImage) {
    var url = sphereImage.dataset.url;
    var width = sphereImage.dataset.width;
    var height = sphereImage.dataset.height;

    var scene = new THREE.Scene();

    var geometry = new THREE.SphereGeometry(5, 60, 40);
    geometry.scale(-1, 1, 1);

    var textureLoader = new THREE.TextureLoader();
    var material = new THREE.MeshBasicMaterial({ map: textureLoader.load(url) });

    var sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    var axis = new THREE.AxisHelper(1000);
    axis.position.set(0,0,0);
    scene.add(axis);

    var camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
    camera.position.set(0,0,0.1);
    camera.lookAt(sphere.position);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    renderer.setClearColor({color: 0x000000});
    sphereImage.appendChild(renderer.domElement);
    renderer.render(scene, camera);

    var controls = new THREE.OrbitControls(camera, renderer.domElement);

    function render() {
      window.requestAnimationFrame(render);
      sphere.rotation.y += 0.05 * Math.PI / 180;
      renderer.render(scene, camera);
      controls.update();
    }

    render();
  }

  function initialize() {
    var sphereImages = document.querySelectorAll('.mnpk-sphere-image');
    for (var i = 0; i < sphereImages.length; i++) {
      createCanvas(sphereImages[i]);
    }
  }

  document.addEventListener('DOMContentLoaded', initialize);
})();


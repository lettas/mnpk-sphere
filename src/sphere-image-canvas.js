import * as THREE from 'three';

const textureLoader = new THREE.TextureLoader();

export default class SphereImageCanvas {
  get domElement() {
    return this.renderer.domElement;
  }

  constructor(url, width, height) {
    this.url = url;
    this.width = width;
    this.height = height;

    this.scene = createScene();
    this.camera = createCamera(width, height);
    this.renderer = createRenderer(width, height);
    this.sphere = createSphereMesh(url);

    this.scene.add(this.sphere);

    function createScene() {
      const scene = new THREE.Scene();
      return scene;
    }

    function createCamera(width, height) {
      const camera = new THREE.PerspectiveCamera(60, width / height, 0.01, 100);
      camera.position.set(0.01, 0, 0);
      camera.lookAt(0, 0, 0);
      return camera;
    }

    function createRenderer(width, height) {
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(width, height);
      renderer.setClearColor({ color: 0x000000 });
      renderer.domElement.classList.add('mnpk-sphere-image-canvas');
      return renderer;
    }

    function createSphereMesh(url) {
      const geometry = new THREE.SphereGeometry(1, 36, 18);
      geometry.scale(-1, 1, 1);
      const texture = textureLoader.load(url);
      texture.magFilter = THREE.NearestFilter;
      texture.minFilter = THREE.NearestFilter;
      const material = new THREE.MeshBasicMaterial({ map: texture });
      return new THREE.Mesh(geometry, material);
    }
  }

  update() {
    this.renderer.render(this.scene, this.camera);
  }

  setSize(width, height) {
    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }
}


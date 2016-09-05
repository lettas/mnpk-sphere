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
      const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
      camera.position.set(0,0,0);
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
      const geometry = new THREE.SphereGeometry(5, 60, 40);
      geometry.scale(-1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ map: textureLoader.load(url) });
      return new THREE.Mesh(geometry, material);
    }
  }

  update() {
    this.renderer.render(this.scene, this.camera);
  }
}


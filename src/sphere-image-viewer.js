import * as THREE from 'three';
import AutoRotateCameraController from './controller/auto-rotate-camera-controller';

const textureLoader = new THREE.TextureLoader();

export default class SphereImageViewer {
  constructor(url, width, height) {
    this.scene = createScene();
    this.camera = createCamera(width, height);
    this.renderer = createRenderer(width, height);
    this.controller = createDefaultCameraController(this.camera, this.renderer.domElement);

    this.scene.add(createSphereMesh(url));

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
      return renderer;
    }

    function createDefaultCameraController(camera, domElement) {
      const controller = new AutoRotateCameraController(camera, domElement);
      controller.vector = new THREE.Vector3(0, 0.05, 0);
      return controller;
    }

    function createSphereMesh(url) {
      const geometry = new THREE.SphereGeometry(5, 60, 40);
      geometry.scale(-1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ map: textureLoader.load(url) });
      return new THREE.Mesh(geometry, material);
    }
  }

  update() {
    this.controller.update();
    this.renderer.render(this.scene, this.camera);
  }

  get domElement() {
    return this.renderer.domElement;
  }
}


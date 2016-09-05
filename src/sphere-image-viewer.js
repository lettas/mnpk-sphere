import * as THREE from 'three';

const textureLoader = new THREE.TextureLoader();

export default class SphereImageViewer {
  constructor(url, width, height) {
    const scene = new THREE.Scene();

    const sphere = this._createSphereMesh(url);
    scene.add(sphere);

    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
    camera.position.set(0,0,0.1);
    camera.lookAt(sphere.position);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    renderer.setClearColor({ color: 0x000000 });

    this.url = url;
    this.width = width;
    this.height = height;
    this.scene = scene;
    this.sphere = sphere;
    this.camera = camera;
    this.renderer = renderer;
    this.domElement = renderer.domElement;
  }

  update() {
    this.sphere.rotation.y += 0.05 * Math.PI / 180;
    this.renderer.render(this.scene, this.camera);
    //this.controls.update();
  }

  _createSphereMesh(url) {
    const geometry = new THREE.SphereGeometry(5, 60, 40);
    geometry.scale(-1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ map: textureLoader.load(url) });
    return new THREE.Mesh(geometry, material);
  }
}


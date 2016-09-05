import * as THREE from 'three';
import CameraController from './camera-controller';

export default class AutoRotateCameraController extends CameraController {
  constructor(camera, domElement) {
    super(camera, domElement);
    this.vector = new THREE.Vector3();
  }

  update() {
    this.camera.rotation.x += this.vector.x * (Math.PI / 180);
    this.camera.rotation.y += this.vector.y * (Math.PI / 180);
    this.camera.rotation.z += this.vector.z * (Math.PI / 180);
  }
}


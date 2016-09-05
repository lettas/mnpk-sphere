import * as THREE from 'three';

import SphereImageCanvas from './sphere-image-canvas';
import SphereImageControlPanel from './sphere-image-control-panel';
require('./controller/OrbitControls');

import AutoRotateCameraController from './controller/auto-rotate-camera-controller';

export default class SphereImageViewer {
  get domElement() {
    return this.root;
  }

  constructor(url, width, height) {
    this.canvas = new SphereImageCanvas(url, width, height);
    this.panel = new SphereImageControlPanel(width, height);

    this.controller = new THREE.OrbitControls(this.canvas.camera, this.canvas.domElement);
    this.controller.autoRotate = true;
//    this.controller.vector = new THREE.Vector3(0, 0.05, 0);

    // TODO パネルのボタンをsubscribeするなど

    const root = document.createElement('div');
    root.classList.add('mnpk-sphere-image-container');
    root.appendChild(this.canvas.domElement);
    root.appendChild(this.panel.domElement);
    this.root = root;
  }

  update() {
    this.controller.update();
    this.canvas.update();
  }
}


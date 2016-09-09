import * as THREE from 'three';

import SphereImageCanvas from './sphere-image-canvas';
import SphereImageControlPanel from './sphere-image-control-panel';

require('./controller/OrbitControls');
require('./controller/DeviceOrientationControls');
require('./controller/EmptyControls');

const ControlTypes = {
  Orbit: Symbol('Orbit'),
  DeviceOrientation: Symbol('DeviceOrientation'),
  Empty: Symbol('Empty'),
};

export default class SphereImageViewer {
  get domElement() {
    return this.root;
  }

  constructor(url, width, height) {
    this.canvas = new SphereImageCanvas(url, width, height);
    this.panel = new SphereImageControlPanel();

    this.controller = this.createController(ControlTypes.Orbit);

    this.root = document.createElement('div');
    this.root.classList.add('mnpk-sphere-image-container');
    this.root.appendChild(this.canvas.domElement);
    this.root.appendChild(this.panel.domElement);

    this.panel.orbitControlsButton.addEventListener('click', () => {
      this.switchController(ControlTypes.Orbit);
    });

    this.panel.deviceOrientationControlsButton.addEventListener('click', () => {
      this.switchController(ControlTypes.DeviceOrientation);
    });

    this.panel.fullscreenButton.addEventListener('click', () => {
        this.canvas.setSize(window.innerWidth, window.innerHeight);
    });
  }

  update() {
    this.controller.update();
    this.canvas.update();
  }

  createController(controlType) {
    let controller;

    switch(controlType) {
      case ControlTypes.Orbit:
        controller = new THREE.OrbitControls(this.canvas.camera, this.canvas.domElement);
        break;

      case ControlTypes.DeviceOrientation:
        controller = new THREE.DeviceOrientationControls(this.canvas.camera);
        controller.connect();
        break;

      case ControlTypes.Empty:
      default:
        controller = new THREE.EmptyControls();
        break;
    }

    return controller;
  }

  switchController(controlType) {
    if (this.controller) {
      this.controller.dispose();
    }
    this.controller = this.createController(controlType);
  }
}


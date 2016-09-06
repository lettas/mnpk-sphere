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

    // TODO パネルのボタンをsubscribeするなど

    const root = document.createElement('div');
    root.classList.add('mnpk-sphere-image-container');
    root.setAttribute('style', `width: ${width}px; height: ${height}px; position: relative;`);
    root.appendChild(this.canvas.domElement);
    root.appendChild(this.panel.domElement);
    this.root = root;
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
}


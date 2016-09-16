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
    const factory = {
      [ControlTypes.Orbit]: createOrbitControls,
      [ControlTypes.DeviceOrientation]: createDeviceOrientationControls
    } [controlType] || createEmptyControls;

    return factory(this.canvas);

    function createOrbitControls(canvas) {
      const controller = new THREE.OrbitControls(canvas.camera, canvas.domElement);
      controller.enableDamping = true;
      controller.dampingFactor = 0.15;
      controller.enableZoom = true;
      controller.zoomSpeed = 0.5;
      controller.enableRotate = true;
      controller.rotateSpeed = -0.25;
      controller.enablePan = false;
      controller.minDistance = 0.5;
      controller.maxDistance = 2;
      return controller;
    }

    function createDeviceOrientationControls(canvas) {
      const controller = new THREE.DeviceOrientationControls(canvas.camera);
      controller.connect();
      return controller;
    }

    function createEmptyControls(canvas) {
      return new THREE.EmptyControls();
    }
  }

  switchController(controlType) {
    if (this.controller) {
      this.controller.dispose();
    }
    this.controller = this.createController(controlType);
  }
}


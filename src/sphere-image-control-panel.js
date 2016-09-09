const buttonTemplate = (buttonText) => {
  return `<a>${buttonText}</a>`;
};

export default class SphereImageControlPanel {
  get domElement() {
    return this.root;
  }

  constructor() {
    this.root = document.createElement('div');
    this.root.classList.add('mnpk-sphere-image-control-panel');

    // TODO ボタン追加など
    const buttonContainer = document.createElement('ul');

    this.orbitControlsButton = document.createElement('li');
    this.orbitControlsButton.innerText = 'Orbit';
    buttonContainer.appendChild(this.orbitControlsButton);

    this.deviceOrientationControlsButton = document.createElement('li');
    this.deviceOrientationControlsButton.innerText = 'DeviceOrientation';
    buttonContainer.appendChild(this.deviceOrientationControlsButton);

    this.fullscreenButton = document.createElement('li');
    this.fullscreenButton.innerText = 'Fullscreen';
    buttonContainer.appendChild(this.fullscreenButton);

    this.root.appendChild(buttonContainer);
  }
}


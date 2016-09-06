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
    this.root.setAttribute('style', 'width: 100%; height: 100%; position: absolute; top: 0;');

    // TODO ボタン追加など

  }
}


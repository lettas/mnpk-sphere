export default class SphereImageControlPanel {
  get domElement() {
    return this.root;
  }

  constructor(width, height) {
    const root = document.createElement('div');
    root.classList.add('mnpk-sphere-image-control-panel');

    // TODO 幅/高さの設定など
    // TODO ボタン追加など

    this.root = root;
  }
}


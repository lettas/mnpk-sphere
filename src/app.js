import SphereImageCanvas from './sphere-image-canvas';
import './control/OrbitControls';

function initialize() {
  const canvases = [];

  const imageContainers = document.querySelectorAll('.mnpk-sphere-image');
  for (const imageContainer of imageContainers) {
    const { url, width, height } = imageContainer.dataset;
    const canvas = new SphereImageCanvas(url, width, height);
    imageContainer.appendChild(canvas.domElement);
    canvases.push(canvas);
  }

  function render() {
    window.requestAnimationFrame(render);

    for (const canvas of canvases) {
      canvas.update();
    }
  }

  render();
}

document.addEventListener('DOMContentLoaded', initialize);


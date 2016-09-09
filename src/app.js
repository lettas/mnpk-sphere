import 'babel-polyfill';
import SphereImageViewer from './sphere-image-viewer';

document.addEventListener('DOMContentLoaded', () => {
  const viewers = [];

  const containers = document.querySelectorAll('.mnpk-sphere-image');
  for (const container of containers) {
    const { url, width, height } = container.dataset;
    const viewer = new SphereImageViewer(url, width, height);
    container.appendChild(viewer.domElement);
    viewers.push(viewer);
  }

  const render = () => {
    for (const viewer of viewers) {
      viewer.update();
    }
    window.requestAnimationFrame(render);
  }

  window.viewers = viewers;

  render();
});


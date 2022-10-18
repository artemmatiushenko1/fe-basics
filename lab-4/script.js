'use strict';

/*-------TASK-1 (6 variant = (55 % 10) + 1)-------*/

const refs = {
  firstElement: document.getElementById('first-element'),
  secondElement: document.querySelector('#first-element').nextElementSibling,
};

refs.firstElement.addEventListener('click', () => {
  if (refs.firstElement.classList.contains('first-element--active')) {
    refs.firstElement.classList.remove('first-element--active');
    refs.firstElement.classList.add('second-element--active');
  } else {
    refs.firstElement.classList.remove('second-element--active');
    refs.firstElement.classList.add('first-element--active');
  }
});

refs.secondElement.addEventListener('click', () => {
  if (refs.secondElement.classList.contains('second-element--active')) {
    refs.secondElement.classList.add('first-element--active');
    refs.secondElement.classList.remove('second-element--active');
  } else {
    refs.secondElement.classList.add('second-element--active');
    refs.secondElement.classList.remove('first-element--active');
  }
});

/*-------TASK-1-------*/

/*-------TASK-2-------*/

class ImgViewer {
  refs = {
    addImgButton: document.querySelector('.add-img-button'),
    removeImgButton: document.querySelector('.remove-img-button'),
    zoomInImgButton: document.querySelector('.zoom-in-img-button'),
    zoomOutImgButton: document.querySelector('.zoom-out-img-button'),
    resetZoomButton: document.querySelector('.reset-zoom-button'),
    imgContainer: document.querySelector('.img-container'),
  };

  currentZoom = 1;
  zoomStep = 0.2;

  constructor() {
    this.refs.addImgButton.addEventListener('click', this.add);
    this.refs.removeImgButton.addEventListener('click', this.remove);
    this.refs.zoomInImgButton.addEventListener('click', this.zoomIn);
    this.refs.zoomOutImgButton.addEventListener('click', this.zoomOut);
    this.refs.resetZoomButton.addEventListener('click', this.resetZoom);
  }

  getImg = () => {
    return this.refs.imgContainer.querySelector('img');
  };

  add = () => {
    let img = this.getImg();
    if (img) return;

    img = document.createElement('img');
    img.src = './assets/sydney-image.webp';
    img.style.transition = 'transform 0.5s ease';
    img.style.width = '400px';

    this.refs.imgContainer.appendChild(img);
  };

  remove = () => {
    const img = this.getImg();
    if (!img) return;

    this.refs.imgContainer.removeChild(img);
    this.currentZoom = 1;
  };

  zoomIn = () => {
    const img = this.getImg();
    if (!img) return;

    const nextZoomValue = this.currentZoom + this.zoomStep;
    img.style.transform = `scale(${nextZoomValue})`;
    this.currentZoom += this.zoomStep;
  };

  zoomOut = () => {
    const img = this.getImg();
    if (!img) return;

    const nextZoomValue = this.currentZoom - this.zoomStep;
    if (nextZoomValue <= this.zoomStep) return;

    img.style.transform = `scale(${nextZoomValue})`;
    this.currentZoom -= this.zoomStep;
  };

  resetZoom = () => {
    const img = this.getImg();
    if (!img) return;

    this.currentZoom = 1;
    img.style.transform = `scale(${this.currentZoom})`;
  };
}

const imgViewer = new ImgViewer();

/*-------TASK-2-------*/

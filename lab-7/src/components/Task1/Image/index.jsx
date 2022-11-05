import { useState } from 'react';
import sydneyImg from '../../../assets/sydney-image.webp';
import './style.css';

const ZOOM_STEP = 0.2;
const DEFAULT_ZOOM = 1;

const Image = () => {
  const [showImage, setShowImage] = useState(false);
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);

  const handleAdd = () => {
    if (showImage) return;
    setShowImage(true);
  };

  const handleRemove = () => {
    if (!showImage) return;
    setShowImage(false);
    setZoom(DEFAULT_ZOOM);
  };

  const handleZoomIn = () => {
    if (!showImage) return;
    setZoom((prevValue) => {
      return prevValue + ZOOM_STEP;
    });
  };

  const handleZoomOut = () => {
    if (!showImage) return;
    setZoom((prevValue) => {
      const nextValue = prevValue - ZOOM_STEP;
      if (nextValue <= ZOOM_STEP) return prevValue;
      return nextValue;
    });
  };

  const handleResetZoom = () => {
    if (!showImage) return;
    setZoom(DEFAULT_ZOOM);
  };

  return (
    <div>
      <div className="img-container">
        {showImage ? (
          <img
            width="400px"
            src={sydneyImg}
            alt="Зображення міста Сідней"
            style={{ transform: `scale(${zoom})` }}
          />
        ) : null}
      </div>
      <button className="add-img-button" onClick={handleAdd}>
        ➕ Додати
      </button>
      <button className="remove-img-button" onClick={handleRemove}>
        ➖ Видалити
      </button>
      <button className="zoom-in-img-button" onClick={handleZoomIn}>
        🔍➕ Збільшити
      </button>
      <button className="zoom-out-img-button" onClick={handleZoomOut}>
        🔍➖ Зменшити
      </button>
      <button className="reset-zoom-button" onClick={handleResetZoom}>
        ✖ Скинути Zoom
      </button>
    </div>
  );
};

export default Image;

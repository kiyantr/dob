import React, {useEffect, useState} from 'react';
import './Animate.css';
// import dogBite from './dog-bite.png'; 

const importAll = (r) => {
  return r.keys().map(r);
};

const imagesAnimate = importAll(require.context('./images-animate', false, /\.(png|jpe?g|svg|webp)$/));

function Animate() {
  const [loaded, setLoaded] = useState(false);

  // Trigger animation when the page loads
  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <section className="gallery">
        <div className="image-gallery">
        {imagesAnimate.map((image, index) => (
            <div
              key={index}
              className={`image-container ${loaded ? 'animate' : ''}`}
            >
              <img src={image} alt={`Dog meal ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
  );
}

export default Animate;

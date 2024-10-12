import React, { useEffect, useState } from "react";
import "./App.css";
import LongText from "./LongText";
import Tokenomics from "./Tokenomics";

// import Animate from './Animate'
// import dogBite from './dog-bite.png';

const importAll = (r) => {
  return r.keys().map(r);
};

const images = importAll(
  require.context("./images", false, /\.(png|jpe?g|svg|webp)$/)
);
const images2 = importAll(
  require.context("./images2", false, /\.(png|jpe?g|svg|webp)$/)
);
const tokenomicsData = {
  totalSupply: "1,000,000,000 DOB",
  distribution: [
    { name: "Fairlunch", percentage: 99.99 },
    { name: "Tax", percentage: 0 },
  ],
};

function App() {
  return (
    <div className="App">
      <header className="header">
        <p className="head-text">Dogbit ($DOB)</p>
        <p className="signature">
        if you don't buy it, you get bitten 🐶💥
        </p>
      </header>
      <section className="cta">
        {/* <h2>Join the Feast: Be Part of the Meme to the Moon</h2> */}
        {/* <p>
          Dogbit: The Meme Coin You Can't Ignore! Beware of the Bite! If you
          haven't heard about DOB (Dogbit) yet, you're missing out—and trust
          us, the Dog's not happy about it! 🐶💥
        </p> */}
        <button>Buy Now</button>
        {/* <button>Join the Dog Dinner Party</button> */}
        <LongText
          text={`🚀 Dogbit coming soon 🌕`}
        />
      </section>
      <Tokenomics
        totalSupply={tokenomicsData.totalSupply}
        distribution={tokenomicsData.distribution}
      />
      <section className="about">
        <h2>🚀 Dogbit to the Moon 🌕</h2>
        <p>
          This Dog is hungry, and it’s devouring the competition—on its way
          straight to the moon! With each bite, the price climbs higher, and if
          you're not onboard, you might get left behind (and bitten!). 🐕💸
        </p>
      </section>
      <section className="about">
        <h2>Why Buy DOB?</h2>
        <p>
          Avoid the Bite: Don't let the Dog nip at your heels—get in now before
          it's too late! Meme Power: The ultimate meme coin on the SUI Network,
          leading the meme revolution. Moon Potential: This Dog's got meals,
          it's got bite, and it's got serious moonshot potential. Remember: if
          you don’t hold DOB, the Dog will come for you. But if you do—you're
          going straight to the moon! 🌕💥
        </p>
      </section>
      {/* <Animate /> */}
      <section className="gallery">
        <h2>Dog's Journey to the Moon</h2>
        <div className="image-gallery">
          {images.map((image, index) => (
            <div className="image-container" key={index}>
              <img src={image} alt={`Dog meal ${index + 1}`} />
            </div>
          ))}
          {images2.map((image, index) => (
            <div className="image-container" key={index}>
              <img src={image} alt={`Dog meal ${index + 1}`} />
            </div>
          ))}
          {/* {images.map((image, index) => (
            <div
              key={index}
              className={`image-container ${loaded ? 'animate' : ''}`}
            >
              <img src={image.default} alt={`Dog meal ${index + 1}`} />
            </div>
          ))} */}
        </div>
      </section>

      <footer>
        <p>Meme, Laugh, and Moon – It’s What Dogbit Does Best!</p>
        <ul>
          <li>
            <a href="https://twitter.com">Twitter</a>
          </li>
          <li>
            <a href="https://discord.com">Discord</a>
          </li>
          <li>
            <a href="https://sui.io">Learn more about SUI</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;

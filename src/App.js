import React, { useEffect, useState } from "react";
import "./App.css";
import LongText from "./LongText";
import Tokenomics from "./Tokenomics";

// import Animate from './Animate'
import dogbitee from "./images/1.jpeg";

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
  totalSupply: "1,000,000,000 $DOB",
  distribution: [
    { name: "100% Liquidity pool", percentage: 100 },
    { name: "0% Tax", percentage: 0 },
  ],
};

function App() {
  return (
    <div className="App">
      <header className="header">
        <p className="head-text">dogbite ($DOB)</p>
        <p className="signature">if you don't buy it, you get bitten 🐶</p>
      </header>

      <img src={dogbitee} className="dogebite-img" alt="dogebite" />

      <section className="cta">
        {/* <h2>Join the Feast: Be Part of the Meme to the Moon</h2> */}
        {/* <p>
          dogbite: The Meme Coin You Can't Ignore! Beware of the Bite! If you
          haven't heard about DOB (dogbite) yet, you're missing out—and trust
          us, the Dog's not happy about it! 🐶💥
        </p> */}

        <button>Buy Now</button>
        {/* <button>Join the Dog Dinner Party</button> */}
        <LongText text={`CA: coming soon`} />
      </section>
      <Tokenomics
        totalSupply={tokenomicsData.totalSupply}
        distribution={tokenomicsData.distribution}
      />
      <section className="about">
        <h2>🚀 dogbite to the Moon 🌕</h2>
        <p>
          This dogbite is hungry, and it's devouring the competition—on its way
          straight to the moon! With each bite, the price climbs higher, and if
          you're not onboard, you might get left behind (and bitten!).
        </p>
      </section>
      <section className="about">
        <h2>Why Buy $DOB?</h2>
        <p>
          <b>No Promises, Just Memes</b>: $DOB isn't an investment; it's a meme
          coin. Don't expect returns, expect laughs
        </p>
        <p>
          <b>Unstructured by Design</b>: There's no team or roadmap here.
          dogebite thrives on randomness and humor
        </p>
        <p>
          <b>Avoid the Bite</b>: Don't let the dogebite nip at your heels—get in
          now before it's too late!
        </p>
        <p>
          <b> Moon Potential</b>: This dog got meals, it's got bite, and it's
          got serious moonshot potential.
        </p>
        <p>
          <b>Meme Power</b>: The ultimate meme coin on the Sui network, leading
          the meme revolution.
        </p>
        <p>
          <b>Remember</b>: if you don't hold $DOB, the dogebite will come for
          you. But if you do—you're going straight to the moon! 🪂
        </p>
      </section>
      {/* <Animate /> */}
      <section className="gallery">
        <h2>dogebit journey to the Moon</h2>
        <div className="image-gallery">
          {images.map((image, index) => (
            <div className="image-container" key={index}>
              <img src={image} alt={`dogebite ${index + 1}`} />
            </div>
          ))}
          {images2.map((image, index) => (
            <div className="image-container" key={index}>
              <img src={image} alt={`dogebite ${index + 1}`} />
            </div>
          ))}
          {/* {images.map((image, index) => (
            <div
              key={index}
              className={`image-container ${loaded ? 'animate' : ''}`}
            >
              <img src={image.default} alt={`dogebite ${index + 1}`} />
            </div>
          ))} */}
        </div>
      </section>

      <footer>
        <p>Meme, Laugh, and Moon - It's What dogbite does best!</p>
        <ul>
          <li>
            <a target={"_blank"} href="https://x.com/dogbitesui">
              X
            </a>
          </li>
          {/* <li>
            <a href="https://discord.com">Discord</a>
          </li> */}
          {/* <li>
            <a href="https://sui.io">Learn more about SUI</a>
          </li> */}
        </ul>
      </footer>
    </div>
  );
}

export default App;

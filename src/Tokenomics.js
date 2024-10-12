import React from "react";
import "./Tokenomics.css"; // External CSS file for styling

const Tokenomics = ({ totalSupply, distribution }) => {
  return (
    <div className="tokenomics">
      <h2>Tokenomics</h2>
      <div className="tokenomics-container">
        <div className="total-supply">
          <h3>Total Supply</h3>
          <p>{totalSupply}</p>
        </div>
        <div className="distribution">
          <h3>Distribution</h3>
          <ul>
            {distribution.map((item, index) => (
              <li key={index}>
                <span className="distribution-name">{item.name}</span>
                <span className="distribution-percentage">
                  {item.percentage}%
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;

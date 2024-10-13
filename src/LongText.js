import React, { useState, useRef, useEffect } from "react";
import { FiCopy } from "react-icons/fi";
import "./LongText.css";

function LongText({ text }) {
  const [copied, setCopied] = useState(false);

  // Function to truncate text in the middle
  const truncateText = (str, max) => {
    if (str.length <= max) return str;
    const start = str.slice(0, 6);
    const end = str.slice(-8);
    return `${start}...${end}`;
  };

  // Function to handle copying text to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      // Show copied message
      setCopied(true);

      // Hide the message after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  return (
    <>
      <div className="truncate-container">
        <span className="truncate-text" title={text}>
          {truncateText(text, 50)}
        </span>
        <span className="copy-icon" onClick={handleCopy}>
          <FiCopy />
        </span>
        {/* Copied Message */}
      </div>
      {copied && <div className="copied-message">Copied!</div>}
    </>
  );
}

export default LongText;

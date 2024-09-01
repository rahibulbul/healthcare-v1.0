import React from "react";
import "./Loading.css"; // We'll define the CSS shortly

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="spinner"></div>
    </div>
  );
};

export default Loading;

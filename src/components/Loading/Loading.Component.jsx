import "./Loading.Styles.css";

import React, { useState, useEffect } from "react";

export const Loading = ({ isLoading }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let interval;

    if (isLoading) {
      setWidth(0);
      interval = setInterval(() => {
        setWidth((prevWidth) => {
          if (prevWidth >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prevWidth + 1;
        });
      }, 50);
    } else {
      setWidth(100);
      setTimeout(() => setWidth(0), 300);
    }

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <div className="loading-bar-container">
      <div className="loading-bar" style={{ width: `${width}%` }}></div>
    </div>
  );
};

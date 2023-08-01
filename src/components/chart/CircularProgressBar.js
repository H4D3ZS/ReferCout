import React, { useState, useEffect } from 'react';


const SemiCircularProgress = ({ title, percentage, totalEmployee }) => {
    const [offset, setOffset] = useState(0);
  
    useEffect(() => {
      const progress = percentage / 100;
      const circumference = 125 * 2 * Math.PI; // Circumference of the semi-circle
      const offsetValue = circumference * (1 - progress);
  
      setOffset(offsetValue);
    }, [percentage]);
  
    return (
      <div className="progress-card">
        <div className="progress-card__header">
          <h3>{title}</h3>
          <span>{percentage}%</span>
        </div>
        <svg className="progress-ring" width="130" height="65">
          <circle
            className="progress-ring__circle progress-ring__circle--bg"
            stroke="lightgray"
            strokeWidth="10"
            fill="transparent"
            r="55"
            cx="65"
            cy="65"
          />
          <circle
            className="progress-ring__circle"
            stroke="blue"
            strokeWidth="10"
            fill="transparent"
            r="55"
            cx="65"
            cy="65"
            style={{
              strokeDasharray: `${offset} ${125 * 2 * Math.PI}`,
            }}
          />
          <text x="50%" y="50%" textAnchor="middle" dy=".3em" className="progress-text">
            {percentage}%
          </text>
        </svg>
        <div className="progress-card__content">
          <p>Total Employee: {totalEmployee}</p>
          <div className="progress-card__participated">
            <p>Participated:</p>
            <p className="progress-card__participated-value">{percentage}%</p>
          </div>
          <div className="progress-card__not-participated">
            <p>Not Participated:</p>
            <p className="progress-card__not-participated-value">{100 - percentage}%</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default SemiCircularProgress;
  
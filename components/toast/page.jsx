import React, { useEffect, useState } from "react";
import "./Toast.css";
import {
  FaExclamationCircle,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const Toast = ({ type, message, duration = 5000, onClose }) => {
  // 5 seconds by default
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const timer = setTimeout(onClose, duration);

    // More frequent updates to smooth the progress bar
    const intervalDuration = 10; // Update every 10 milliseconds
    const totalIntervals = duration / intervalDuration; // Total number of intervals

    const interval = setInterval(() => {
      setProgress((prev) => Math.max(prev - 100 / totalIntervals, 0));
    }, intervalDuration);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [duration, onClose]);

  const renderIcon = () => {
    switch (type) {
      case "success":
        return <FaCheckCircle className="toast-icon success-icon" />;
      case "error":
        return <FaTimesCircle className="toast-icon error-icon" />;
      case "warning":
        return <FaExclamationCircle className="toast-icon warning-icon" />;
      default:
        return null;
    }
  };

  return (
    <div className={`toast ${type}`}>
      <div className="toast-content">
        {renderIcon()}
        <span className="toast-message">{message}</span>
        <FaTimesCircle className="toast-close" onClick={onClose} />
      </div>
    </div>
  );
};

export default Toast;

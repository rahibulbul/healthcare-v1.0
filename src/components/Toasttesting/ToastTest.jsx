"use client";
import React, { useState } from "react";
import Toast from "../toast/Toast"; // Ensure the path is correct

const ToastTest = () => {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastType, setToastType] = useState("success");
  const [toastMessage, setToastMessage] = useState("This is a toast message!");

  const showToast = (type, message) => {
    setToastType(type);
    setToastMessage(message);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(true);
    }, 50000); // Display the toast for 3 seconds
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Toast Notification Tester</h1>
      <button
        onClick={() =>
          showToast(
            "success",
            "Success! lasdasksakasb samdasjdhas adgashjdabssadm hjbajhsds ."
          )
        }
      >
        Show Success Toast
      </button>
      <button
        onClick={() => showToast("error", "Error! Something went wrong.")}
      >
        Show Error Toast
      </button>
      <button onClick={() => showToast("warning", "Warning! Check this out.")}>
        Show Warning Toast
      </button>
      {toastVisible && (
        <Toast
          type={toastType}
          message={toastMessage}
          onClose={() => setToastVisible(false)}
        />
      )}
    </div>
  );
};

export default ToastTest;

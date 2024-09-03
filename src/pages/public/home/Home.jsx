import React from "react";
import ToastTest from "../../../components/Toasttesting/ToastTest";
import DataPush from "../../../components/dummynotifypush/DataPush";
const Home = () => {
  return (
    <div className="screen">
      <div className="web-container">
        <ToastTest />
        <button onClick={DataPush}>Push Data</button>
      </div>
    </div>
  );
};

export default Home;

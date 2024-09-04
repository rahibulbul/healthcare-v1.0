import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const Newuser = () => {
  const location = useLocation();
  const { username, userId } = location.state || {
    username: "DefaultName",
    userId: "0000",
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="screen">
      <div className="web-container new-register-user">
        <div className="new-register-user-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="220"
            height="220"
            viewBox="0 0 100 100"
          >
            <path
              fill="#ee3e54"
              d="M13 27A2 2 0 1 0 13 31A2 2 0 1 0 13 27Z"
            ></path>
            <path
              fill="#f1bc19"
              d="M77 12A1 1 0 1 0 77 14A1 1 0 1 0 77 12Z"
            ></path>
            <path
              fill="#fce0a2"
              d="M50 13A37 37 0 1 0 50 87A37 37 0 1 0 50 13Z"
            ></path>
            <path
              fill="#f1bc19"
              d="M83 11A4 4 0 1 0 83 19A4 4 0 1 0 83 11Z"
            ></path>
            <path
              fill="#ee3e54"
              d="M87 22A2 2 0 1 0 87 26A2 2 0 1 0 87 22Z"
            ></path>
            <path
              fill="#fbcd59"
              d="M81 74A2 2 0 1 0 81 78 2 2 0 1 0 81 74zM15 59A4 4 0 1 0 15 67 4 4 0 1 0 15 59z"
            ></path>
            <path
              fill="#ee3e54"
              d="M25 85A2 2 0 1 0 25 89A2 2 0 1 0 25 85Z"
            ></path>
            <path
              fill="#fff"
              d="M18.5 51A2.5 2.5 0 1 0 18.5 56A2.5 2.5 0 1 0 18.5 51Z"
            ></path>
            <path
              fill="#f1bc19"
              d="M21 66A1 1 0 1 0 21 68A1 1 0 1 0 21 66Z"
            ></path>
            <path
              fill="#fff"
              d="M80 33A1 1 0 1 0 80 35A1 1 0 1 0 80 33Z"
            ></path>
            <path
              fill="#a1d3a2"
              d="M72.4,44v20.4c0,4.3-3.5,7.8-7.8,7.8H35.5c-4.3,0-7.8-3.5-7.8-7.8V35.6c0-4.3,3.5-7.8,7.8-7.8h29.1 c3.6,0,6.6,2.4,7.6,5.8"
            ></path>
            <path
              fill="#472b29"
              d="M64.5,73H35.5c-4.7,0-8.5-3.8-8.5-8.5V35.6c0-4.7,3.8-8.5,8.5-8.5h29.1c3.8,0,7.2,2.6,8.2,6.3 c0.1,0.4-0.1,0.8-0.5,0.9c-0.4,0.1-0.8-0.1-0.9-0.5c-0.9-3.1-3.7-5.2-6.9-5.2H35.5c-3.9,0-7.1,3.2-7.1,7.1v28.8 c0,3.9,3.2,7.1,7.1,7.1h29.1c3.9,0,7.1-3.2,7.1-7.1V44c0-0.4,0.3-0.7,0.7-0.7s0.7,0.3,0.7,0.7v20.4C73.1,69.1,69.2,73,64.5,73z"
            ></path>
            <path
              fill="#472b29"
              d="M68.5 59.4c-.3 0-.5-.2-.5-.5V55c0-.3.2-.5.5-.5S69 54.7 69 55v3.9C69 59.2 68.8 59.4 68.5 59.4zM68.5 52.5c-.3 0-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5S69 49.7 69 50v2C69 52.3 68.8 52.5 68.5 52.5z"
            ></path>
            <path
              fill="#472b29"
              d="M64,69H36c-2.8,0-5-2.2-5-5V36c0-2.8,2.2-5,5-5h25.4c0.3,0,0.5,0.2,0.5,0.5S61.7,32,61.4,32H36 c-2.2,0-4,1.8-4,4v28c0,2.2,1.8,4,4,4h28c2.2,0,4-1.8,4-4v-2.4c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5V64C69,66.8,66.8,69,64,69z"
            ></path>
            <g>
              <path
                fill="#00ac9c"
                d="M49.5,62.5l-0.1,0c-0.1,0-0.1,0-0.2,0c-0.4,0-0.8-0.1-1-0.4l-8.3-8.2c-0.3-0.3-0.4-0.6-0.4-1s0.2-0.8,0.4-1 c0.3-0.3,0.6-0.4,1-0.4c0.4,0,0.8,0.2,1,0.4l7.1,7.4l24-23.3c0.3-0.3,0.6-0.4,1-0.4c0.4,0,0.8,0.2,1,0.4c0.3,0.3,0.4,0.6,0.4,1 s-0.2,0.8-0.4,1L50.6,62.1c-0.1,0.1-0.2,0.2-0.4,0.3c0,0-0.1,0-0.1,0.1c-0.1,0-0.2,0.1-0.3,0.1C49.7,62.5,49.7,62.5,49.5,62.5 L49.5,62.5z"
              ></path>
              <path
                fill="#472b29"
                d="M74.2,36c0.3,0,0.5,0.1,0.7,0.3c0.4,0.4,0.4,1,0,1.4l-24.6,24c-0.1,0.1-0.2,0.1-0.3,0.2c0,0-0.1,0-0.1,0 c-0.1,0-0.1,0-0.2,0c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.1,0c0,0,0,0,0,0c-0.1,0-0.1,0-0.2,0c-0.2,0-0.5-0.1-0.7-0.3l-8.3-8.2 c-0.4-0.4-0.4-1,0-1.4c0.2-0.2,0.4-0.3,0.7-0.3s0.5,0.1,0.7,0.3l7.5,7.8l24.4-23.6C73.7,36.1,73.9,36,74.2,36 M74.2,35 c-0.5,0-1,0.2-1.4,0.6L49.2,58.5l-6.8-7.1c-0.4-0.4-0.9-0.6-1.4-0.6s-1,0.2-1.4,0.6c-0.4,0.4-0.6,0.9-0.6,1.4c0,0.5,0.2,1,0.6,1.4 l8.3,8.2c0.4,0.4,0.8,0.6,1.4,0.6c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.2,0c0.1,0,0.3,0,0.3,0c0.1,0,0.2,0,0.3-0.1 c0.1,0,0.2-0.1,0.2-0.1c0.2-0.1,0.4-0.2,0.5-0.4l24.6-24c0.4-0.4,0.6-0.9,0.6-1.4c0-0.5-0.2-1-0.6-1.4C75.2,35.2,74.7,35,74.2,35 L74.2,35z"
              ></path>
            </g>
          </svg>
        </div>
        <p className="sm:text-base font-semibold mb-3">
          Welcome to our HealthCare Insurance Center
        </p>
        <div className="new-user-info">
          <div className="new-user-name flex flex-row items-center gap-2 justify-center">
            <label htmlFor="new-username">Your username is:</label>
            <span id="new-username">{username}</span>
            <i
              className="fa-regular fa-copy text-gray-500 text-[13px] hover:text-black duration-500"
              onClick={() => copyToClipboard(username)}
              style={{ cursor: "pointer" }}
            ></i>
          </div>
          <div className="new-user-id new-user-name flex flex-row items-center gap-2 justify-center">
            <label htmlFor="new-user-id">Your userID is:</label>
            <span id="new-user-id">{userId}</span>
            <i
              className="fa-regular fa-copy text-gray-500 text-[13px] hover:text-black duration-500"
              onClick={() => copyToClipboard(userId)}
              style={{ cursor: "pointer" }}
            ></i>
          </div>
        </div>
        <div className="new-user-redirect flex items-center gap-10 my-8">
          <Link
            to="/"
            className="border-2 md:px-10 md:py-3 sm:p-4 border-gray-400 rounded-md text-gray-500 font-semibold hover:bg-gray-400 hover:text-white duration-500 hover:shadow-ui-bold"
          >
            Visit homepage
          </Link>
          <Link
            to="/login"
            className="border-2 md:px-14 md:py-3 sm:p-4 border-gray-400 rounded-md text-gray-500 font-semibold hover:bg-gray-400 hover:text-white duration-500 hover:shadow-ui-bold"
          >
            Go to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Newuser;

// import ReactDom from "react-dom";
// import App from "./App";
// import "./index.css";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import "bootstrap/dist/js/bootstrap.bundle.min.js";

// ReactDom.render(<App />, document.querySelector("#root"));

// index.js
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Ensure this is the correct path to your App component
import { AuthProvider } from "./components/AuthProvider"; // Ensure the path is correct

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root") // Ensure this ID matches the one in your HTML file
);

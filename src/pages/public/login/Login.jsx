import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { FaCircleExclamation } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { IoLockClosedOutline, IoEye, IoEyeOff } from "react-icons/io5";
import "./style.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: false, password: false });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleBlur = (field) => {
    if (field === "username" && !username) {
      setErrors((prev) => ({ ...prev, username: true }));
      document.getElementById("username").parentElement.classList.add("error");
    } else if (field === "password" && !password) {
      setErrors((prev) => ({ ...prev, password: true }));
      document.getElementById("password").parentElement.classList.add("error");
    }
  };

  const handleChange = (field, value) => {
    if (field === "username") {
      setUsername(value);
      if (value) {
        setErrors((prev) => ({ ...prev, username: false }));
        document
          .getElementById("username")
          .parentElement.classList.remove("error");
      }
    } else if (field === "password") {
      setPassword(value);
      if (value) {
        setErrors((prev) => ({ ...prev, password: false }));
        document
          .getElementById("password")
          .parentElement.classList.remove("error");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      setErrors((prev) => ({ ...prev, username: true }));
      document.getElementById("username").focus();
    } else if (!password) {
      setErrors((prev) => ({ ...prev, password: true }));
      document.getElementById("password").focus();
    } else {
      // Assuming authentication is successful
      navigate("/dashboard");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div className="screen">
      <div className="web-container w-full h-full login flex flex-col items-center">
        <p className="text-3xl font-bold mt-32">Hello There!</p>
        <p className="text-2xl font-semibold">Welcome Back!</p>
        <p className="text-[16px]">Please login to start your session.</p>
        <form
          className="flex flex-col items-center mt-10"
          onSubmit={handleSubmit}
        >
          <div className="login-input">
            <input
              className="login-inputBox"
              type="text"
              name="username"
              id="username"
              required
              value={username}
              onBlur={() => handleBlur("username")}
              onChange={(e) => handleChange("username", e.target.value)}
            />
            <FiUser className="login-icon-left" />
            {errors.username ? (
              <FaCircleExclamation className="icon-exclamation" />
            ) : (
              username && <FaCheckCircle className="icon-check-circle" />
            )}
            <label className="login-input-label" htmlFor="username">
              Enter your username
            </label>
            {errors.username && (
              <span className="login-form-error">
                Username can not be empty
              </span>
            )}
          </div>
          <div className="login-input login-input-password">
            <input
              className="login-inputBox"
              type={passwordVisible ? "text" : "password"}
              name="password"
              id="password"
              required
              value={password}
              onBlur={() => handleBlur("password")}
              onChange={(e) => handleChange("password", e.target.value)}
            />
            <IoLockClosedOutline className="login-icon-left" />
            {passwordVisible ? (
              <IoEyeOff
                className="login-pass-show"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <IoEye
                className="login-pass-show"
                onClick={togglePasswordVisibility}
              />
            )}
            {errors.password ? (
              <FaCircleExclamation className="icon-exclamation" />
            ) : (
              password && <FaCheckCircle className="icon-check-circle" />
            )}
            <label className="login-input-label" htmlFor="password">
              Enter your password
            </label>
            {errors.password && (
              <span className="login-form-error">
                Password can not be empty
              </span>
            )}
          </div>
          <div className="form-login-checkbox-forgot">
            <div className="login-form-checkbox">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <label htmlFor="checkbox">Remember Me</label>
            </div>
            <div className="login-form-forgot">
              <a href="#" className="forgot-link">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="form-login-button">
            <input type="submit" value="Sign In" className="loginButton" />
          </div>
          <div className="login-form-register-link">
            <span>Don not have account?</span>
            <Link to="/registration" className="login-register">
              Click here to registration
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

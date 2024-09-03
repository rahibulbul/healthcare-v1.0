// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FiUser } from "react-icons/fi";
// import { FaCircleExclamation } from "react-icons/fa6";
// import { FaCheckCircle } from "react-icons/fa";
// import { IoLockClosedOutline, IoEye, IoEyeOff } from "react-icons/io5";
// import {
//   getDatabase,
//   ref,
//   get,
//   query,
//   orderByChild,
//   equalTo,
// } from "firebase/database";
// import Toast from "../../../components/toast/Toast";
// import "./style.css";

// export default function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({ username: false, password: false });
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [toastVisible, setToastVisible] = useState(false);
//   const [toastMessage, setToastMessage] = useState("");
//   const [toastType, setToastType] = useState("success");
//   const navigate = useNavigate();

//   const showToast = (type, message) => {
//     setToastType(type);
//     setToastMessage(message);
//     setToastVisible(true);
//     setTimeout(() => {
//       setToastVisible(false);
//     }, 3000);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const db = getDatabase();
//     const userTypes = ["patients", "doctors", "agents", "employees"];
//     let userData = null;

//     if (!username) {
//       setErrors((prev) => ({ ...prev, username: true }));
//       document.getElementById("username").focus();
//     } else if (!password) {
//       setErrors((prev) => ({ ...prev, password: true }));
//       document.getElementById("password").focus();
//     } else {
//       try {
//         for (const userType of userTypes) {
//           const userQuery = query(
//             ref(db, userType),
//             orderByChild("username"),
//             equalTo(username)
//           );
//           const snapshot = await get(userQuery);

//           if (snapshot.exists()) {
//             snapshot.forEach((childSnapshot) => {
//               const data = childSnapshot.val();
//               if (data.password === password) {
//                 userData = { ...data, userType };
//               }
//             });

//             if (userData) break; // Exit loop if user is found
//           }
//         }

//         if (userData) {
//           // Save user data in session storage
//           sessionStorage.setItem("userData", JSON.stringify(userData));

//           showToast("success", "Login successful, Redirecting ...");

//           setTimeout(() => {
//             switch (userData.userType) {
//               case "employees":
//                 navigate("/employeedashboard");
//                 break;
//               case "patients":
//                 navigate("/patientdashboard");
//                 break;
//               case "doctors":
//                 navigate("/doctordashboard");
//                 break;
//               case "agents":
//                 navigate("/agentdashboard");
//                 break;
//               default:
//                 showToast("error", "Unknown user type.");
//                 break;
//             }
//           }, 1000); // Add a small delay
//         } else {
//           console.log("Authentication failed. Incorrect username or password.");
//           showToast(
//             "warning",
//             "Incorrect username or password. Please try again."
//           );
//           setErrors((prev) => ({ ...prev, password: true }));
//         }
//       } catch (error) {
//         console.error("Error during login:", error.message);
//         showToast("error", "Login failed. Please try again.");
//       }
//     }
//   };

//   const handleBlur = (field) => {
//     if (field === "username" && !username) {
//       setErrors((prev) => ({ ...prev, username: true }));
//       document.getElementById("username").parentElement.classList.add("error");
//     } else if (field === "password" && !password) {
//       setErrors((prev) => ({ ...prev, password: true }));
//       document.getElementById("password").parentElement.classList.add("error");
//     }
//   };

//   const handleChange = (field, value) => {
//     if (field === "username") {
//       setUsername(value);
//       if (value) {
//         setErrors((prev) => ({ ...prev, username: false }));
//         document
//           .getElementById("username")
//           .parentElement.classList.remove("error");
//       }
//     } else if (field === "password") {
//       setPassword(value);
//       if (value) {
//         setErrors((prev) => ({ ...prev, password: false }));
//         document
//           .getElementById("password")
//           .parentElement.classList.remove("error");
//       }
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setPasswordVisible((prev) => !prev);
//   };

//   return (
//     <div className="screen">
//       <div className="web-container w-full h-full login flex flex-col items-center">
//         <p className="text-3xl font-bold mt-32">Hello There!</p>
//         <p className="text-2xl font-semibold">Welcome Back!</p>
//         <p className="text-[16px]">Please login to start your session.</p>
//         <form
//           className="flex flex-col items-center mt-10"
//           onSubmit={handleSubmit}
//         >
//           <div className="login-input">
//             <input
//               className="login-inputBox"
//               type="text"
//               name="username"
//               id="username"
//               required
//               value={username}
//               onBlur={() => handleBlur("username")}
//               onChange={(e) => handleChange("username", e.target.value)}
//             />
//             <FiUser className="login-icon-left" />
//             {errors.username ? (
//               <FaCircleExclamation className="icon-exclamation" />
//             ) : (
//               username && <FaCheckCircle className="icon-check-circle" />
//             )}
//             <label className="login-input-label" htmlFor="username">
//               Enter your username
//             </label>
//             {errors.username && (
//               <span className="login-form-error">Username cannot be empty</span>
//             )}
//           </div>
//           <div className="login-input login-input-password">
//             <input
//               className="login-inputBox"
//               type={passwordVisible ? "text" : "password"}
//               name="password"
//               id="password"
//               required
//               value={password}
//               onBlur={() => handleBlur("password")}
//               onChange={(e) => handleChange("password", e.target.value)}
//             />
//             <IoLockClosedOutline className="login-icon-left" />
//             {passwordVisible ? (
//               <IoEyeOff
//                 className="login-pass-show"
//                 onClick={togglePasswordVisibility}
//               />
//             ) : (
//               <IoEye
//                 className="login-pass-show"
//                 onClick={togglePasswordVisibility}
//               />
//             )}
//             {errors.password ? (
//               <FaCircleExclamation className="icon-exclamation" />
//             ) : (
//               password && <FaCheckCircle className="icon-check-circle" />
//             )}
//             <label className="login-input-label" htmlFor="password">
//               Enter your password
//             </label>
//             {errors.password && (
//               <span className="login-form-error">Password cannot be empty</span>
//             )}
//           </div>
//           <div className="form-login-checkbox-forgot">
//             <div className="login-form-checkbox">
//               <input type="checkbox" name="checkbox" id="checkbox" />
//               <label htmlFor="checkbox">Remember Me</label>
//             </div>
//             <div className="login-form-forgot">
//               <Link to="#" className="forgot-link">
//                 Forgot password?
//               </Link>
//             </div>
//           </div>
//           <div className="form-login-button">
//             <input type="submit" value="Sign In" className="loginButton" />
//           </div>
//           <div className="login-with-google">
//             <span className="login-with-google-or">or</span>
//             <button className="loginButtonGoogle">
//               <svg
//                 className="google-icon"
//                 xmlns="http://www.w3.org/2000/svg"
//                 x="0px"
//                 y="0px"
//                 viewBox="0 0 48 48"
//               >
//                 <path
//                   fill="#FFC107"
//                   d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
//                 ></path>
//                 <path
//                   fill="#FF3D00"
//                   d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
//                 ></path>
//                 <path
//                   fill="#4CAF50"
//                   d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
//                 ></path>
//                 <path
//                   fill="#1976D2"
//                   d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
//                 ></path>
//               </svg>
//               Sign In with Google
//             </button>
//           </div>
//           <div className="login-form-register-link">
//             <span>Don not have account?</span>
//             <Link to="/registration" className="login-register">
//               Click here to register
//             </Link>
//           </div>
//         </form>
//       </div>
//       {toastVisible && (
//         <Toast
//           type={toastType}
//           message={toastMessage}
//           onClose={() => setToastVisible(false)}
//         />
//       )}
//     </div>
//   );
// }

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { FaCircleExclamation } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { IoLockClosedOutline, IoEye, IoEyeOff } from "react-icons/io5";
import {
  getDatabase,
  ref,
  get,
  query,
  orderByChild,
  equalTo,
} from "firebase/database";
import Toast from "../../../components/toast/Toast";
import "./style.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: false, password: false });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  const navigate = useNavigate();

  const showToast = (type, message) => {
    setToastType(type);
    setToastMessage(message);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const db = getDatabase();
    const userTypes = ["patients", "doctors", "agents", "employees"];
    let userData = null;

    if (!username) {
      setErrors((prev) => ({ ...prev, username: true }));
    } else if (!password) {
      setErrors((prev) => ({ ...prev, password: true }));
    } else {
      try {
        for (const userType of userTypes) {
          const userQuery = query(
            ref(db, userType),
            orderByChild("username"),
            equalTo(username)
          );
          const snapshot = await get(userQuery);

          if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
              const data = childSnapshot.val();
              if (data.password === password) {
                userData = { ...data, userType, id: childSnapshot.key }; // Save the user ID
              }
            });

            if (userData) break;
          }
        }

        if (userData) {
          sessionStorage.setItem("userData", JSON.stringify(userData));
          showToast("success", "Login successful, Redirecting ...");

          setTimeout(() => {
            switch (userData.userType) {
              case "employees":
                navigate("/employeedashboard");
                break;
              case "patients":
                navigate("/patientdashboard");
                break;
              case "doctors":
                navigate("/doctordashboard");
                break;
              case "agents":
                navigate("/agentdashboard");
                break;
              default:
                showToast("error", "Unknown user type.");
                break;
            }
          }, 1000);
        } else {
          showToast(
            "warning",
            "Incorrect username or password. Please try again."
          );
          setErrors((prev) => ({ ...prev, password: true }));
        }
      } catch (error) {
        showToast("error", "Login failed. Please try again.");
      }
    }
  };

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
              <span className="login-form-error">Username cannot be empty</span>
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
              <span className="login-form-error">Password cannot be empty</span>
            )}
          </div>
          <div className="form-login-checkbox-forgot">
            <div className="login-form-checkbox">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <label htmlFor="checkbox">Remember Me</label>
            </div>
            <div className="login-form-forgot">
              <Link to="#" className="forgot-link">
                Forgot password?
              </Link>
            </div>
          </div>
          <div className="form-login-button">
            <input type="submit" value="Sign In" className="loginButton" />
          </div>
          <div className="login-with-google">
            <span className="login-with-google-or">or</span>
            <button className="loginButtonGoogle">
              <svg
                className="google-icon"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              Sign In with Google
            </button>
          </div>
          <div className="login-form-register-link">
            <span>Don not have account?</span>
            <Link to="/registration" className="login-register">
              Click here to register
            </Link>
          </div>
        </form>
      </div>
      {toastVisible && (
        <Toast
          type={toastType}
          message={toastMessage}
          onClose={() => setToastVisible(false)}
        />
      )}
    </div>
  );
}

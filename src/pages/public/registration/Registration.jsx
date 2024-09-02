// import React, { useState } from "react"; // Adjusted the path
// import { FiUser, FiMail } from "react-icons/fi";
// import { FaExclamationCircle, FaCheckCircle } from "react-icons/fa";
// import { IoLockClosedOutline, IoEye, IoEyeOff, IoClose } from "react-icons/io5";
// import { LuUserCircle2 } from "react-icons/lu";
// import Toast from "../../../components/toast/Toast"; // Adjusted the path
// import "./style.css";
// import { Link } from "react-router-dom";

// export default function Registration() {
//   const [fullname, setFullname] = useState("");
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmpassword, setConfirmPassword] = useState("");
//   const [isTermsAccepted, setIsTermsAccepted] = useState(false);

//   const [toastVisible, setToastVisible] = useState(false);
//   const [toastType, setToastType] = useState("");
//   const [toastMessage, setToastMessage] = useState("");

//   const [fullnameError, setFullnameError] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [usernameError, setUsernameError] = useState("");
//   const [passwordError, setPasswordError] = useState({
//     message: "Enter your password",
//     color: "#696969",
//   });
//   const [confirmPasswordError, setConfirmPasswordError] = useState({
//     message: "Enter your password",
//     color: "#696969",
//   });
//   const [passwordMatchMessage, setPasswordMatchMessage] = useState("");

//   const [isFullnameTouched, setIsFullnameTouched] = useState(false);
//   const [isEmailTouched, setIsEmailTouched] = useState(false);
//   const [isUsernameTouched, setIsUsernameTouched] = useState(false);
//   const [isPasswordTouched, setIsPasswordTouched] = useState(false);
//   const [isConfirmPasswordTouched, setIsConfirmPasswordTouched] =
//     useState(false);

//   const [isFullnameValid, setIsFullnameValid] = useState(false);
//   const [isEmailValid, setIsEmailValid] = useState(false);
//   const [isUsernameValid, setIsUsernameValid] = useState(false);
//   const [passwordStrength, setPasswordStrength] = useState(0);
//   const [confirmPasswordStrength, setConfirmPasswordStrength] = useState(0);
//   const [isPasswordValid, setIsPasswordValid] = useState(false);
//   const [isPasswordMatched, setIsPasswordMatched] = useState(false);

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const [showTermsPanel, setShowTermsPanel] = useState(false);

//   // Toast handling
//   const showToast = (type, message) => {
//     setToastType(type);
//     setToastMessage(message);
//     setToastVisible(true);
//     setTimeout(() => {
//       setToastVisible(false);
//     }, 5000); // Display the toast for 5 seconds
//   };

//   // Fullname validation
//   const validateFullname = (value) => {
//     if (value.length === 0) {
//       setFullnameError("Full name cannot be empty.");
//       setIsFullnameValid(false);
//     } else if (value.length < 3) {
//       setFullnameError("Full name must be at least 3 letters.");
//       setIsFullnameValid(false);
//     } else {
//       setFullnameError("");
//       setIsFullnameValid(true);
//     }
//   };

//   const handleFullnameChange = (e) => {
//     setFullname(e.target.value);
//     if (isFullnameTouched) {
//       validateFullname(e.target.value);
//     }
//   };

//   const handleFullnameBlur = () => {
//     setIsFullnameTouched(true);
//     validateFullname(fullname);
//   };

//   // Email validation
//   const validateEmail = (value) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (value.length === 0) {
//       setEmailError("Email cannot be empty.");
//       setIsEmailValid(false);
//     } else if (!emailRegex.test(value)) {
//       setEmailError("Type correct email address.");
//       setIsEmailValid(false);
//     } else {
//       setEmailError("");
//       setIsEmailValid(true);
//     }
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     if (isEmailTouched) {
//       validateEmail(e.target.value);
//     }
//   };

//   const handleEmailBlur = () => {
//     setIsEmailTouched(true);
//     validateEmail(email);
//   };

//   // Username validation
//   const validateUsername = (value) => {
//     const usernameRegex = /^[a-z0-9]+$/;
//     const isNumericOnly = /^[0-9]+$/;

//     if (value.length === 0) {
//       setUsernameError("Username cannot be empty.");
//       setIsUsernameValid(false);
//     } else if (value.length < 3) {
//       setUsernameError("Username must be at least 3 letters.");
//       setIsUsernameValid(false);
//     } else if (!usernameRegex.test(value)) {
//       setUsernameError(
//         "Username can only contain lowercase letters and numbers."
//       );
//       setIsUsernameValid(false);
//     } else if (isNumericOnly.test(value)) {
//       setUsernameError("Username cannot be only numeric.");
//       setIsUsernameValid(false);
//     } else {
//       setUsernameError("");
//       setIsUsernameValid(true);
//     }
//   };

//   const handleUsernameChange = (e) => {
//     const value = e.target.value.toLowerCase().replace(/\s+/g, ""); // Converts to lowercase and removes spaces
//     setUsername(value);
//     if (isUsernameTouched) {
//       validateUsername(value);
//     }
//   };

//   const handleUsernameBlur = () => {
//     setIsUsernameTouched(true);
//     validateUsername(username);
//   };

//   // Password and Confirm Password Validation
//   const validatePassword = (password, setStrength) => {
//     let strength = 0;
//     let message = "";
//     let color = "#696969"; // Default color
//     let isValid = false;

//     // Check for different criteria
//     const hasLowercase = /[a-z]/.test(password);
//     const hasUppercase = /[A-Z]/.test(password);
//     const hasNumber = /\d/.test(password);
//     const hasSpecialChar = /[^a-zA-Z0-9]/.test(password);

//     if (password.length < 8) {
//       message = "Password too short";
//       color = "#e74c3c";
//       strength = 1;
//     } else if (password.length > 20) {
//       message = "Password too long";
//       color = "#e74c3c";
//       strength = 5;
//     } else {
//       let criteriaMet = 0;
//       if (hasLowercase) criteriaMet++;
//       if (hasUppercase) criteriaMet++;
//       if (hasNumber) criteriaMet++;
//       if (hasSpecialChar) criteriaMet++;

//       switch (criteriaMet) {
//         case 1:
//           message = "Password is good";
//           color = "#f1c40f";
//           strength = 2;
//           isValid = true;
//           break;
//         case 2:
//           message = "Password is moderate";
//           color = "#e67e22";
//           strength = 3;
//           isValid = true;
//           break;
//         case 3:
//           message = "Password is strong";
//           color = "#2ecc71";
//           strength = 4;
//           isValid = true;
//           break;
//         case 4:
//           message = "Password is strongest";
//           color = "#27ae60";
//           strength = 5;
//           isValid = true;
//           break;
//         default:
//           message = "Invalid password";
//           color = "#e74c3c";
//           strength = 1;
//           break;
//       }
//     }

//     setStrength(strength);
//     return { message, color, isValid };
//   };

//   const handlePasswordChange = (e) => {
//     const value = e.target.value;
//     setPassword(value);
//     const { message, color, isValid } = validatePassword(
//       value,
//       setPasswordStrength
//     );
//     setPasswordError({ message, color });
//     setIsPasswordValid(isValid);
//     if (isValid && confirmpassword.length > 0) {
//       validatePasswordMatch(value, confirmpassword);
//     } else {
//       setIsPasswordMatched(false);
//       setPasswordMatchMessage("Passwords do not match");
//     }
//   };

//   const handlePasswordBlur = () => {
//     setIsPasswordTouched(true);
//     if (password.length === 0) {
//       setPasswordError({
//         message: "Password cannot be empty.",
//         color: "#e74c3c",
//       });
//     } else {
//       const { message, color, isValid } = validatePassword(
//         password,
//         setPasswordStrength
//       );
//       setPasswordError({ message, color });
//       setIsPasswordValid(isValid);
//       if (isValid && confirmpassword.length > 0) {
//         validatePasswordMatch(password, confirmpassword);
//       }
//     }
//   };

//   const handleConfirmPasswordChange = (e) => {
//     const value = e.target.value;
//     setConfirmPassword(value);
//     const { message, color, isValid } = validatePassword(
//       value,
//       setConfirmPasswordStrength
//     );
//     setConfirmPasswordError({ message, color });
//     if (isPasswordValid) {
//       validatePasswordMatch(password, value);
//     }
//   };

//   const handleConfirmPasswordBlur = () => {
//     setIsConfirmPasswordTouched(true);
//     if (confirmpassword.length === 0) {
//       setConfirmPasswordError({
//         message: "Password cannot be empty.",
//         color: "#e74c3c",
//       });
//     } else if (isPasswordValid) {
//       validatePasswordMatch(password, confirmpassword);
//     }
//   };

//   // Validate if both passwords match
//   const validatePasswordMatch = (password, confirmpassword) => {
//     if (password !== confirmpassword) {
//       setPasswordMatchMessage("Passwords do not match");
//       setIsPasswordMatched(false);
//       setPasswordError((prev) => ({
//         ...prev,
//         message: "Passwords do not match",
//         color: "#e74c3c",
//       }));
//       setConfirmPasswordError((prev) => ({
//         ...prev,
//         message: "Passwords do not match",
//         color: "#e74c3c",
//       }));
//     } else {
//       setPasswordMatchMessage("Passwords matched");
//       setIsPasswordMatched(true);
//       setPasswordError((prev) => ({
//         ...prev,
//         message: "Passwords matched",
//         color: "#2ecc71",
//       }));
//       setConfirmPasswordError((prev) => ({
//         ...prev,
//         message: "Passwords matched",
//         color: "#2ecc71",
//       }));
//     }
//   };

//   // Toggle password visibility
//   const toggleShowPassword = () => setShowPassword((prev) => !prev);
//   const toggleShowConfirmPassword = () =>
//     setShowConfirmPassword((prev) => !prev);

//   // Handle form submission
//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     // Ensure all fields are valid and terms are accepted before submission
//     if (
//       isFullnameValid &&
//       isEmailValid &&
//       isUsernameValid &&
//       isPasswordValid &&
//       isPasswordMatched &&
//       isTermsAccepted
//     ) {
//       // Show success toast and proceed with form submission
//       showToast("success", "Registration successful. Please go to login.");
//     } else {
//       // Show error toast and do not submit
//       showToast("error", "Please fix all the errors and fill out the form.");

//       // Show errors if any field is invalid or terms are not accepted
//       if (!isFullnameValid) setIsFullnameTouched(true);
//       if (!isEmailValid) setIsEmailTouched(true);
//       if (!isUsernameValid) setIsUsernameTouched(true);
//       if (!isPasswordValid || !isPasswordMatched) {
//         setIsPasswordTouched(true);
//         setIsConfirmPasswordTouched(true);
//       }
//       if (!isTermsAccepted) {
//         setShowTermsPanel(true); // Show terms panel if not accepted
//       }
//     }
//   };

//   // Handle terms and conditions checkbox click
//   const handleTermsCheckboxClick = () => {
//     if (!isTermsAccepted) {
//       setShowTermsPanel(true); // Show the terms and conditions panel
//     }
//   };

//   // Handle terms acceptance
//   const handleTermsAccepted = () => {
//     setIsTermsAccepted(true);
//     setShowTermsPanel(false); // Hide the terms and conditions panel
//   };

//   return (
//     <div className="screen">
//       <div className="web-container w-full h-full registration flex flex-col items-center">
//         <p className="text-3xl font-semibold">Welcome to HealthCare system!</p>
//         <p className="text-[16px]">Please register to join with us.</p>
//         <form
//           className="flex flex-col items-center mt-10"
//           onSubmit={handleFormSubmit}
//         >
//           {/* Full Name Field */}
//           <div
//             className={`registration-input ${
//               fullnameError && isFullnameTouched ? "error" : ""
//             }`}
//           >
//             <input
//               className="registration-inputBox"
//               type="text"
//               name="fullname"
//               id="fullname"
//               value={fullname}
//               onChange={handleFullnameChange}
//               onBlur={handleFullnameBlur}
//               required
//             />
//             <LuUserCircle2 className="registration-icon-left" />
//             <FaExclamationCircle
//               className={`icon-exclamation ${
//                 fullnameError && isFullnameTouched ? "" : "hidden"
//               }`}
//             />
//             <FaCheckCircle
//               className={`icon-check-circle ${isFullnameValid ? "" : "hidden"}`}
//             />
//             <label className="registration-input-label" htmlFor="fullname">
//               Enter your Full Name
//             </label>
//             <span className="registration-form-error">{fullnameError}</span>
//           </div>

//           {/* Email Field */}
//           <div
//             className={`registration-input ${
//               emailError && isEmailTouched ? "error" : ""
//             }`}
//           >
//             <input
//               className="registration-inputBox"
//               type="text"
//               name="email"
//               id="email"
//               value={email}
//               onChange={handleEmailChange}
//               onBlur={handleEmailBlur}
//               required
//             />
//             <FiMail className="registration-icon-left" />
//             <FaExclamationCircle
//               className={`icon-exclamation ${
//                 emailError && isEmailTouched ? "" : "hidden"
//               }`}
//             />
//             <FaCheckCircle
//               className={`icon-check-circle ${isEmailValid ? "" : "hidden"}`}
//             />
//             <label className="registration-input-label" htmlFor="email">
//               Enter your email
//             </label>
//             <span className="registration-form-error">{emailError}</span>
//           </div>

//           {/* Username Field */}
//           <div
//             className={`registration-input ${
//               usernameError && isUsernameTouched ? "error" : ""
//             }`}
//           >
//             <input
//               className="registration-inputBox"
//               type="text"
//               name="username"
//               id="username"
//               value={username}
//               onChange={handleUsernameChange}
//               onBlur={handleUsernameBlur}
//               required
//             />
//             <FiUser className="registration-icon-left" />
//             <FaExclamationCircle
//               className={`icon-exclamation ${
//                 usernameError && isUsernameTouched ? "" : "hidden"
//               }`}
//             />
//             <FaCheckCircle
//               className={`icon-check-circle ${isUsernameValid ? "" : "hidden"}`}
//             />
//             <label className="registration-input-label" htmlFor="username">
//               Enter your username
//             </label>
//             <span className="registration-form-error">{usernameError}</span>
//           </div>

//           {/* Password Field with Strength Indicator */}
//           <div
//             className={`registration-input registration-input-password ${
//               passwordError.message !== "Enter your password" ? "error" : ""
//             }`}
//           >
//             <input
//               className="registration-inputBox"
//               type={showPassword ? "text" : "password"}
//               name="password"
//               id="password"
//               value={password}
//               onChange={handlePasswordChange}
//               onBlur={handlePasswordBlur}
//               required
//             />
//             <IoLockClosedOutline className="registration-icon-left" />
//             {showPassword ? (
//               <IoEyeOff
//                 className="registration-pass-show"
//                 onClick={toggleShowPassword}
//               />
//             ) : (
//               <IoEye
//                 className="registration-pass-show"
//                 onClick={toggleShowPassword}
//               />
//             )}
//             <span className="password-strength-panel">
//               <span
//                 className="registration-form-password-error"
//                 style={{ color: passwordError.color }}
//               >
//                 {passwordError.message}
//               </span>
//               <div className="password-strength-indicator">
//                 {[...Array(5)].map((_, i) => (
//                   <div
//                     key={i}
//                     className={`strength-bar ${
//                       i < passwordStrength ? "active" : ""
//                     }`}
//                     style={{
//                       backgroundColor:
//                         i < passwordStrength ? passwordError.color : "",
//                     }}
//                   ></div>
//                 ))}
//               </div>
//             </span>
//             <FaExclamationCircle
//               className={`icon-exclamation ${
//                 passwordError.color === "#e74c3c" ? "" : "hidden"
//               }`}
//             />
//             <FaCheckCircle
//               className={`icon-check-circle ${
//                 isPasswordMatched && isPasswordValid ? "" : "hidden"
//               }`}
//             />
//             <label className="registration-input-label" htmlFor="password">
//               Enter your password
//             </label>
//           </div>

//           {/* Confirm Password Field with Match Validation */}
//           <div
//             className={`registration-input registration-input-password ${
//               confirmPasswordError.message !== "Enter your password"
//                 ? "error"
//                 : ""
//             }`}
//           >
//             <input
//               className="registration-inputBox"
//               type={showConfirmPassword ? "text" : "password"}
//               name="confirm_password"
//               id="confirm_password"
//               value={confirmpassword}
//               onChange={handleConfirmPasswordChange}
//               onBlur={handleConfirmPasswordBlur}
//               required
//             />
//             <IoLockClosedOutline className="registration-icon-left" />
//             {showConfirmPassword ? (
//               <IoEyeOff
//                 className="registration-pass-show"
//                 onClick={toggleShowConfirmPassword}
//               />
//             ) : (
//               <IoEye
//                 className="registration-pass-show"
//                 onClick={toggleShowConfirmPassword}
//               />
//             )}
//             <span className="password-strength-panel">
//               <span
//                 className="registration-form-password-error"
//                 style={{ color: confirmPasswordError.color }}
//               >
//                 {passwordMatchMessage || confirmPasswordError.message}
//               </span>
//               <div className="password-strength-indicator">
//                 {[...Array(5)].map((_, i) => (
//                   <div
//                     key={i}
//                     className={`strength-bar ${
//                       i < confirmPasswordStrength ? "active" : ""
//                     }`}
//                     style={{
//                       backgroundColor:
//                         i < confirmPasswordStrength
//                           ? confirmPasswordError.color
//                           : "",
//                     }}
//                   ></div>
//                 ))}
//               </div>
//             </span>
//             <FaExclamationCircle
//               className={`icon-exclamation ${
//                 confirmPasswordError.color === "#e74c3c" ? "" : "hidden"
//               }`}
//             />
//             <FaCheckCircle
//               className={`icon-check-circle ${
//                 isPasswordMatched && isPasswordValid ? "" : "hidden"
//               }`}
//             />
//             <label
//               className="registration-input-label"
//               htmlFor="confirm_password"
//             >
//               Confirm your password
//             </label>
//           </div>

//           {/* Terms and condition */}
//           <div className="form-registration-terms">
//             <input
//               type="checkbox"
//               name="terms"
//               id="terms"
//               onClick={handleTermsCheckboxClick}
//               checked={isTermsAccepted}
//               readOnly
//             />
//             <label htmlFor="terms">
//               I have read and accept all the terms and conditions.
//             </label>
//             <div
//               className={`registration-terms-panel ${
//                 showTermsPanel ? "show" : ""
//               }`}
//             >
//               <div className="terms-panel-top">
//                 <h1>Terms and conditions</h1>
//                 <IoClose
//                   className="terms-close-icon"
//                   onClick={() => setShowTermsPanel(false)}
//                 />
//               </div>
//               <div className="terms-panel-middle">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
//                 quaerat quae laudantium. Maxime odio rem eveniet sint, velit,
//                 earum amet numquam esse atque consequatur, praesentium corporis.
//                 Officia enim quae dolore.
//               </div>
//               <div className="terms-panel-bottom">
//                 <input
//                   type="button"
//                   value="I accepted"
//                   className="registrationButton-terms"
//                   onClick={handleTermsAccepted}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="form-registration-button">
//             <input
//               type="submit"
//               value="Registration"
//               className="registrationButton"
//             />
//           </div>

//           {/* Link to registration Page */}
//           <div className="registration-form-register-link">
//             <span>Already have an account?</span>
//             <Link to="/login" className="registration-register">
//               Visit login
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
import React, { useState } from "react";
import { FiUser, FiMail } from "react-icons/fi";
import { FaExclamationCircle, FaCheckCircle } from "react-icons/fa";
import { IoLockClosedOutline, IoEye, IoEyeOff, IoClose } from "react-icons/io5";
import { LuUserCircle2 } from "react-icons/lu";
import Toast from "../../../components/toast/Toast";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

import { auth, database } from "../../../lib/firebaseConfig";
import { getAuth } from "firebase/auth";
import { ref, set, get, query, orderByChild, equalTo } from "firebase/database";

export default function Registration() {
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const [toastVisible, setToastVisible] = useState(false);
  const [toastType, setToastType] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const [fullnameError, setFullnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState({
    message: "Enter your password",
    color: "#696969",
  });
  const [confirmPasswordError, setConfirmPasswordError] = useState({
    message: "Enter your password",
    color: "#696969",
  });
  const [passwordMatchMessage, setPasswordMatchMessage] = useState("");

  const [isFullnameTouched, setIsFullnameTouched] = useState(false);
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isUsernameTouched, setIsUsernameTouched] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [isConfirmPasswordTouched, setIsConfirmPasswordTouched] =
    useState(false);

  const [isFullnameValid, setIsFullnameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [confirmPasswordStrength, setConfirmPasswordStrength] = useState(0);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordMatched, setIsPasswordMatched] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [showTermsPanel, setShowTermsPanel] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate here

  // Toast handling
  const showToast = (type, message) => {
    setToastType(type);
    setToastMessage(message);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000); // Display the toast for 5 seconds
  };

  const handleTermsCheckboxClick = () => {
    if (!isTermsAccepted) {
      setShowTermsPanel(true); // Show the terms and conditions panel
    }
  };

  // Handle terms acceptance
  const handleTermsAccepted = () => {
    setIsTermsAccepted(true);
    setShowTermsPanel(false); // Hide the terms and conditions panel
  };

  // Fullname validation
  const validateFullname = (value) => {
    if (value.length === 0) {
      setFullnameError("Full name cannot be empty.");
      setIsFullnameValid(false);
    } else if (value.length < 3) {
      setFullnameError("Full name must be at least 3 letters.");
      setIsFullnameValid(false);
    } else {
      setFullnameError("");
      setIsFullnameValid(true);
    }
  };

  const handleFullnameChange = (e) => {
    setFullname(e.target.value);
    if (isFullnameTouched) {
      validateFullname(e.target.value);
    }
  };

  const handleFullnameBlur = () => {
    setIsFullnameTouched(true);
    validateFullname(fullname);
  };

  // Email validation
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value.length === 0) {
      setEmailError("Email cannot be empty.");
      setIsEmailValid(false);
    } else if (!emailRegex.test(value)) {
      setEmailError("Type correct email address.");
      setIsEmailValid(false);
    } else {
      setEmailError("");
      setIsEmailValid(true);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (isEmailTouched) {
      validateEmail(e.target.value);
    }
  };

  const handleEmailBlur = () => {
    setIsEmailTouched(true);
    validateEmail(email);
  };

  // Username validation
  const validateUsername = (value) => {
    const usernameRegex = /^[a-z0-9]+$/;
    const isNumericOnly = /^[0-9]+$/;

    if (value.length === 0) {
      setUsernameError("Username cannot be empty.");
      setIsUsernameValid(false);
    } else if (value.length < 3) {
      setUsernameError("Username must be at least 3 letters.");
      setIsUsernameValid(false);
    } else if (!usernameRegex.test(value)) {
      setUsernameError(
        "Username can only contain lowercase letters and numbers."
      );
      setIsUsernameValid(false);
    } else if (isNumericOnly.test(value)) {
      setUsernameError("Username cannot be only numeric.");
      setIsUsernameValid(false);
    } else {
      setUsernameError("");
      setIsUsernameValid(true);
    }
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value.toLowerCase().replace(/\s+/g, ""); // Converts to lowercase and removes spaces
    setUsername(value);
    if (isUsernameTouched) {
      validateUsername(value);
    }
  };

  const handleUsernameBlur = () => {
    setIsUsernameTouched(true);
    validateUsername(username);
  };

  // Password and Confirm Password Validation
  const validatePassword = (password, setStrength) => {
    let strength = 0;
    let message = "";
    let color = "#696969"; // Default color
    let isValid = false;

    // Check for different criteria
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[^a-zA-Z0-9]/.test(password);

    if (password.length < 8) {
      message = "Password too short";
      color = "#e74c3c";
      strength = 1;
    } else if (password.length > 20) {
      message = "Password too long";
      color = "#e74c3c";
      strength = 5;
    } else {
      let criteriaMet = 0;
      if (hasLowercase) criteriaMet++;
      if (hasUppercase) criteriaMet++;
      if (hasNumber) criteriaMet++;
      if (hasSpecialChar) criteriaMet++;

      switch (criteriaMet) {
        case 1:
          message = "Password is good";
          color = "#f1c40f";
          strength = 2;
          isValid = true;
          break;
        case 2:
          message = "Password is moderate";
          color = "#e67e22";
          strength = 3;
          isValid = true;
          break;
        case 3:
          message = "Password is strong";
          color = "#2ecc71";
          strength = 4;
          isValid = true;
          break;
        case 4:
          message = "Password is strongest";
          color = "#27ae60";
          strength = 5;
          isValid = true;
          break;
        default:
          message = "Invalid password";
          color = "#e74c3c";
          strength = 1;
          break;
      }
    }

    setStrength(strength);
    return { message, color, isValid };
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    const { message, color, isValid } = validatePassword(
      value,
      setPasswordStrength
    );
    setPasswordError({ message, color });
    setIsPasswordValid(isValid);
    if (isValid && confirmpassword.length > 0) {
      validatePasswordMatch(value, confirmpassword);
    } else {
      setIsPasswordMatched(false);
      setPasswordMatchMessage("Passwords do not match");
    }
  };

  const handlePasswordBlur = () => {
    setIsPasswordTouched(true);
    if (password.length === 0) {
      setPasswordError({
        message: "Password cannot be empty.",
        color: "#e74c3c",
      });
    } else {
      const { message, color, isValid } = validatePassword(
        password,
        setPasswordStrength
      );
      setPasswordError({ message, color });
      setIsPasswordValid(isValid);
      if (isValid && confirmpassword.length > 0) {
        validatePasswordMatch(password, confirmpassword);
      }
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    const { message, color, isValid } = validatePassword(
      value,
      setConfirmPasswordStrength
    );
    setConfirmPasswordError({ message, color });
    if (isPasswordValid) {
      validatePasswordMatch(password, value);
    }
  };

  const handleConfirmPasswordBlur = () => {
    setIsConfirmPasswordTouched(true);
    if (confirmpassword.length === 0) {
      setConfirmPasswordError({
        message: "Password cannot be empty.",
        color: "#e74c3c",
      });
    } else if (isPasswordValid) {
      validatePasswordMatch(password, confirmpassword);
    }
  };

  // Validate if both passwords match
  const validatePasswordMatch = (password, confirmpassword) => {
    if (password !== confirmpassword) {
      setPasswordMatchMessage("Passwords do not match");
      setIsPasswordMatched(false);
      setPasswordError((prev) => ({
        ...prev,
        message: "Passwords do not match",
        color: "#e74c3c",
      }));
      setConfirmPasswordError((prev) => ({
        ...prev,
        message: "Passwords do not match",
        color: "#e74c3c",
      }));
    } else {
      setPasswordMatchMessage("Passwords matched");
      setIsPasswordMatched(true);
      setPasswordError((prev) => ({
        ...prev,
        message: "Passwords matched",
        color: "#2ecc71",
      }));
      setConfirmPasswordError((prev) => ({
        ...prev,
        message: "Passwords matched",
        color: "#2ecc71",
      }));
    }
  };

  // Toggle password visibility
  const toggleShowPassword = () => setShowPassword((prev) => !prev);
  const toggleShowConfirmPassword = () =>
    setShowConfirmPassword((prev) => !prev);

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Ensure all fields are valid and terms are accepted before submission
    if (
      isFullnameValid &&
      isEmailValid &&
      isUsernameValid &&
      isPasswordValid &&
      isPasswordMatched &&
      isTermsAccepted
    ) {
      try {
        // Check if the username is already taken
        const usernameQuery = query(
          ref(database, "users"),
          orderByChild("username"),
          equalTo(username)
        );
        const snapshot = await get(usernameQuery);

        if (snapshot.exists()) {
          // Username is taken
          showToast(
            "error",
            "Username is already taken. Please choose another one."
          );
          return;
        }

        // Get the current year and month for user ID generation
        const currentDate = new Date();
        const year = currentDate.getFullYear().toString();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Add 1 because getMonth() returns 0-11

        // Reference to the users count in the database
        const userCountRef = ref(database, `user_counts/${year}${month}`);

        // Get the current count
        const countSnapshot = await get(userCountRef);
        let count = 1; // Default to 1 if no count exists

        if (countSnapshot.exists()) {
          count = countSnapshot.val() + 1; // Increment the existing count
        }

        // Generate the user ID
        const userId = `${year}${month}${count.toString().padStart(2, "0")}`; // e.g., 20240901

        // Store the user's data in Firebase Realtime Database
        await set(ref(database, "users/" + userId), {
          fullName: fullname,
          username: username,
          email: email, // Storing email for reference, but not using it for authentication
          password: password, // Note: In a real-world app, passwords should be hashed before storing
          dob: "", // Initially empty
          gender: "", // Initially empty
          occupation: "", // Initially empty
          address: "", // Initially empty
        });

        // Update the user count in the database
        await set(userCountRef, count);

        // Show success toast
        showToast("success", "Registration successful. Redirecting...");

        // Redirect after toast is hidden
        setTimeout(() => {
          navigate("/newuser", {
            state: { username: username, userId: userId },
          });
        }, 3000); // Redirect after 5 seconds (or the duration of the toast display)
      } catch (error) {
        console.error("Error during registration:", error.message);
        showToast("error", error.message);
      }
    } else {
      // Show error toast and do not submit
      showToast("error", "Please fix all the errors and fill out the form.");

      // Show errors if any field is invalid or terms are not accepted
      if (!isFullnameValid) setIsFullnameTouched(true);
      if (!isEmailValid) setIsEmailTouched(true);
      if (!isUsernameValid) setIsUsernameTouched(true);
      if (!isPasswordValid || !isPasswordMatched) {
        setIsPasswordTouched(true);
        setIsConfirmPasswordTouched(true);
      }
      if (!isTermsAccepted) {
        setShowTermsPanel(true); // Show terms panel if not accepted
      }
    }
  };

  return (
    <div className="screen">
      <div className="web-container w-full h-full registration flex flex-col items-center">
        <p className="text-3xl font-semibold">Welcome to HealthCare system!</p>
        <p className="text-[16px]">Please register to join with us.</p>
        <form
          className="flex flex-col items-center mt-10"
          onSubmit={handleFormSubmit}
        >
          {/* Full Name Field */}
          <div
            className={`registration-input ${
              fullnameError && isFullnameTouched ? "error" : ""
            }`}
          >
            <input
              className="registration-inputBox"
              type="text"
              name="fullname"
              id="fullname"
              value={fullname}
              onChange={handleFullnameChange}
              onBlur={handleFullnameBlur}
              required
            />
            <LuUserCircle2 className="registration-icon-left" />
            <FaExclamationCircle
              className={`icon-exclamation ${
                fullnameError && isFullnameTouched ? "" : "hidden"
              }`}
            />
            <FaCheckCircle
              className={`icon-check-circle ${isFullnameValid ? "" : "hidden"}`}
            />
            <label className="registration-input-label" htmlFor="fullname">
              Enter your Full Name
            </label>
            <span className="registration-form-error">{fullnameError}</span>
          </div>

          {/* Email Field */}
          <div
            className={`registration-input ${
              emailError && isEmailTouched ? "error" : ""
            }`}
          >
            <input
              className="registration-inputBox"
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              required
            />
            <FiMail className="registration-icon-left" />
            <FaExclamationCircle
              className={`icon-exclamation ${
                emailError && isEmailTouched ? "" : "hidden"
              }`}
            />
            <FaCheckCircle
              className={`icon-check-circle ${isEmailValid ? "" : "hidden"}`}
            />
            <label className="registration-input-label" htmlFor="email">
              Enter your email
            </label>
            <span className="registration-form-error">{emailError}</span>
          </div>

          {/* Username Field */}
          <div
            className={`registration-input ${
              usernameError && isUsernameTouched ? "error" : ""
            }`}
          >
            <input
              className="registration-inputBox"
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              onBlur={handleUsernameBlur}
              required
            />
            <FiUser className="registration-icon-left" />
            <FaExclamationCircle
              className={`icon-exclamation ${
                usernameError && isUsernameTouched ? "" : "hidden"
              }`}
            />
            <FaCheckCircle
              className={`icon-check-circle ${isUsernameValid ? "" : "hidden"}`}
            />
            <label className="registration-input-label" htmlFor="username">
              Enter your username
            </label>
            <span className="registration-form-error">{usernameError}</span>
          </div>

          {/* Password Field with Strength Indicator */}
          <div
            className={`registration-input registration-input-password ${
              passwordError.message !== "Enter your password" ? "error" : ""
            }`}
          >
            <input
              className="registration-inputBox"
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              onBlur={handlePasswordBlur}
              required
            />
            <IoLockClosedOutline className="registration-icon-left" />
            {showPassword ? (
              <IoEyeOff
                className="registration-pass-show"
                onClick={toggleShowPassword}
              />
            ) : (
              <IoEye
                className="registration-pass-show"
                onClick={toggleShowPassword}
              />
            )}
            <span className="password-strength-panel">
              <span
                className="registration-form-password-error"
                style={{ color: passwordError.color }}
              >
                {passwordError.message}
              </span>
              <div className="password-strength-indicator">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`strength-bar ${
                      i < passwordStrength ? "active" : ""
                    }`}
                    style={{
                      backgroundColor:
                        i < passwordStrength ? passwordError.color : "",
                    }}
                  ></div>
                ))}
              </div>
            </span>
            <FaExclamationCircle
              className={`icon-exclamation ${
                passwordError.color === "#e74c3c" ? "" : "hidden"
              }`}
            />
            <FaCheckCircle
              className={`icon-check-circle ${
                isPasswordMatched && isPasswordValid ? "" : "hidden"
              }`}
            />
            <label className="registration-input-label" htmlFor="password">
              Enter your password
            </label>
          </div>

          {/* Confirm Password Field with Match Validation */}
          <div
            className={`registration-input registration-input-password ${
              confirmPasswordError.message !== "Enter your password"
                ? "error"
                : ""
            }`}
          >
            <input
              className="registration-inputBox"
              type={showConfirmPassword ? "text" : "password"}
              name="confirm_password"
              id="confirm_password"
              value={confirmpassword}
              onChange={handleConfirmPasswordChange}
              onBlur={handleConfirmPasswordBlur}
              required
            />
            <IoLockClosedOutline className="registration-icon-left" />
            {showConfirmPassword ? (
              <IoEyeOff
                className="registration-pass-show"
                onClick={toggleShowConfirmPassword}
              />
            ) : (
              <IoEye
                className="registration-pass-show"
                onClick={toggleShowConfirmPassword}
              />
            )}
            <span className="password-strength-panel">
              <span
                className="registration-form-password-error"
                style={{ color: confirmPasswordError.color }}
              >
                {passwordMatchMessage || confirmPasswordError.message}
              </span>
              <div className="password-strength-indicator">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`strength-bar ${
                      i < confirmPasswordStrength ? "active" : ""
                    }`}
                    style={{
                      backgroundColor:
                        i < confirmPasswordStrength
                          ? confirmPasswordError.color
                          : "",
                    }}
                  ></div>
                ))}
              </div>
            </span>
            <FaExclamationCircle
              className={`icon-exclamation ${
                confirmPasswordError.color === "#e74c3c" ? "" : "hidden"
              }`}
            />
            <FaCheckCircle
              className={`icon-check-circle ${
                isPasswordMatched && isPasswordValid ? "" : "hidden"
              }`}
            />
            <label
              className="registration-input-label"
              htmlFor="confirm_password"
            >
              Confirm your password
            </label>
          </div>

          {/* Terms and condition */}
          <div className="form-registration-terms">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              onClick={handleTermsCheckboxClick}
              checked={isTermsAccepted}
              readOnly
            />
            <label htmlFor="terms">
              I have read and accept all the terms and conditions.
            </label>
            <div
              className={`registration-terms-panel ${
                showTermsPanel ? "show" : ""
              }`}
            >
              <div className="terms-panel-top">
                <h1>Terms and conditions</h1>
                <IoClose
                  className="terms-close-icon"
                  onClick={() => setShowTermsPanel(false)}
                />
              </div>
              <div className="terms-panel-middle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                quaerat quae laudantium. Maxime odio rem eveniet sint, velit,
                earum amet numquam esse atque consequatur, praesentium corporis.
                Officia enim quae dolore.
              </div>
              <div className="terms-panel-bottom">
                <input
                  type="button"
                  value="I accepted"
                  className="registrationButton-terms"
                  onClick={handleTermsAccepted}
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-registration-button">
            <input
              type="submit"
              value="Registration"
              className="registrationButton"
            />
          </div>

          {/* Link to registration Page */}
          <div className="registration-form-register-link">
            <span>Already have an account?</span>
            <Link to="/login" className="registration-register">
              Visit login
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

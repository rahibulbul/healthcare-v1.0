// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Navbar from "@/components/navbar/page";
// import { FiUser, FiMail } from "react-icons/fi";
// import { FaExclamationCircle } from "react-icons/fa";
// import { FaCheckCircle } from "react-icons/fa";
// import { IoLockClosedOutline, IoEye, IoEyeOff } from "react-icons/io5";
// import { LuUserCircle2 } from "react-icons/lu";
// import { IoClose } from "react-icons/io5";
// import "./style.css";

// export default function Registration() {
//   const [fullname, setFullname] = useState("");
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmpassword, setComfirmPassword] = useState("");
//   const [passwordStrength, setPasswordStrength] = useState(0);

//   const evaluatePasswordStrength = (password) => {
//     let strength = 0;
//     if (password.length > 6) strength += 1;
//     if (/[A-Z]/.test(password)) strength += 1;
//     if (/[a-z]/.test(password)) strength += 1;
//     if (/\d/.test(password)) strength += 1;
//     if (/[^A-Za-z0-9]/.test(password)) strength += 1;
//     setPasswordStrength(strength);
//   };

//   return (
//     <div className="screen">
//       <Navbar />
//       <div className="web-container w-full h-full registration flex flex-col items-center">
//         <p className="text-3xl font-semibold">Welcome to HealthCare system!</p>
//         <p className="text-[16px]">Please register to join with us.</p>
//         <form className="flex flex-col items-center mt-10">
//           {/* Full Name Field */}
//           <div className="registration-input">
//             <input
//               className="registration-inputBox"
//               type="text"
//               name="fullname"
//               id="fullname"
//               required
//             />
//             <LuUserCircle2 className="registration-icon-left" />
//             <FaExclamationCircle className="icon-exclamation" />
//             <FaCheckCircle className="icon-check-circle" />
//             <label className="registration-input-label" htmlFor="fullname">
//               Enter your Full Name
//             </label>
//             <span className="registration-form-error">
//               Your name cannot be empty
//             </span>
//           </div>
//           {/* Email Field */}
//           <div className="registration-input">
//             <input
//               className="registration-inputBox"
//               type="text"
//               name="email"
//               id="email"
//               required
//             />
//             <FiMail className="registration-icon-left" />
//             <FaExclamationCircle className="icon-exclamation" />
//             <FaCheckCircle className="icon-check-circle" />
//             <label className="registration-input-label" htmlFor="email">
//               Enter your email
//             </label>
//             <span className="registration-form-error">
//               Email cannot be empty
//             </span>
//           </div>

//           {/* Username Field */}
//           <div className="registration-input">
//             <input
//               className="registration-inputBox"
//               type="text"
//               name="username"
//               id="username"
//               required
//             />
//             <FiUser className="registration-icon-left" />
//             <FaExclamationCircle className="icon-exclamation" />
//             <FaCheckCircle className="icon-check-circle" />
//             <label className="registration-input-label" htmlFor="username">
//               Enter your username
//             </label>
//             <span className="registration-form-error">
//               Username cannot be empty
//             </span>
//           </div>

//           {/* Password Field with Strength Indicator */}
//           <div className="registration-input registration-input-password">
//             <input
//               className="registration-inputBox"
//               type="password"
//               name="password"
//               id="password"
//               required
//             />
//             <IoLockClosedOutline className="registration-icon-left" />
//             <IoEyeOff className="registration-pass-show" />
//             <IoEye className="registration-pass-show" />
//             <FaExclamationCircle className="icon-exclamation" />
//             <FaCheckCircle className="icon-check-circle" />
//             <label className="registration-input-label" htmlFor="password">
//               Enter your password
//             </label>
//             <div className="password-strength-panel">
//               <span className="registration-form-password-error">
//                 Enter your password
//               </span>
//               <div className="password-strength-indicator">
//                 {[...Array(5)].map((_, i) => (
//                   <div
//                     key={i}
//                     className={`strength-bar ${
//                       i < passwordStrength ? "active" : ""
//                     }`}
//                   ></div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Confirm Password Field */}
//           <div className="registration-input registration-input-password">
//             <input
//               className="registration-inputBox"
//               type="password"
//               name="confirm_password"
//               id="confirm_password"
//               required
//             />
//             <IoLockClosedOutline className="registration-icon-left" />
//             <IoEyeOff className="registration-pass-show" />
//             <IoEye className="registration-pass-show" />
//             <FaExclamationCircle className="icon-exclamation" />
//             <FaCheckCircle className="icon-check-circle" />
//             <label
//               className="registration-input-label"
//               htmlFor="confirm_password"
//             >
//               Confirm your password
//             </label>
//             <div className="password-strength-panel">
//               <span className="registration-form-password-error">
//                 Enter your password
//               </span>
//               <div className="password-strength-indicator">
//                 {[...Array(5)].map((_, i) => (
//                   <div
//                     key={i}
//                     className={`strength-bar ${
//                       i < passwordStrength ? "active" : ""
//                     }`}
//                   ></div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Terms and condition */}
//           <div className="form-registration-terms">
//             <input type="checkbox" name="terms" id="terms" />
//             <label htmlFor="terms">
//               I have read and accept all the terms and conditions.
//             </label>
//             <div className="registration-terms-panel">
//               <div className="terms-panel-top">
//                 <h1>Terms and conditions</h1>
//                 <IoClose className="terms-close-icon" />
//               </div>
//               <div className="terms-panel-middle">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
//                 quaerat quae laudantium. Maxime odio rem eveniet sint, velit,
//                 earum amet numquam esse atque consequatur, praesentium corporis.
//                 Officia enim quae dolore.
//               </div>
//               <div className="terms-panel-bottom">
//                 <input
//                   type="submit"
//                   value="I accepted"
//                   className="registrationButton-terms"
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
//             <a href="/login" className="registration-register">
//               Visit login
//             </a>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

/*
What you have to do. Validate this page.
When user click registration then it should check that all input are valid or not.
All input have 2 kind of icon one is exclamatory and other is check mark. If input is correct then it should show check mark auto.
If all input have check mark then it will check user read terms and condition or not. When user will click on the label I have read and accept all the terms and conditions.
then that panel should have show class and panel will popup. then user have to click I accepted then checkbox will auto marked otherwise user cant mark checkbox.
So all input must have check icon and terms must have checkbox then registration will be done.

Now talk about validation

1. Fullname
condition: Name can be small latter or capital letter.  Must required.
Validation: Must at least 3 letter.
Error message: Full name must be at least 3 letter.
Require Message: Full name can not be empty.
If your touch and leave then show require message (color:#e74c3c) if user not type 3 letter at least, then error message.
when its validate then check mark will show then message hide. When only error or require message need to pop then only message will show otherwise nothing to show.

2. Email
condition: default email condition. Must required.
validation: default email condition. Must required.
error message: Type correct email address.
require message: Email can not be empty.
If your touch and leave then show require message (color:#e74c3c) if user not type correct email address, then error message.
when its validate then check mark will show then message hide. When only error or require message need to pop then only message will show otherwise nothing to show.

3. Username
Condition: by default only small letter and no space.Must required.
Validation: Must at least 3 letter and can only use alphabet and number. If only alphabet its fine but if only number then error.
Error message: User name must be at least 3 letter./ username can not be only numeric
require message: user name can not be empty.
If your touch and leave then show require message (color:#e74c3c) if user not type 3 letter at least, then error message.
when its validate then check mark will show then message hide. When only error or require message need to pop then only message will show otherwise nothing to show.

4. Password
Condition: Must required. Must at least 8 letter. Not more than 20 letter.
Validation and error message: for strength indicator:
password less then 8 letter = text: password too small (color:#e74c3c) = one indicator (color:#e74c3c)  = icon: exclamatory
if only small letter or capital letter or numeric but more then 8 letter = text: password is good (color:#f1c40f) = two indicator (color:#f1c40f)  = icon: check
if only special = text: invalid password  (color:#e74c3c)  = one indicator (color:#e74c3c)  = icon: exclamatory
if small and capital letter mixed = text: password is moderate (color:#e67e22) = three indicator (color:#e67e22) = icon: check
if small and capital letter and number mixed = text: password is strong (color:#2ecc71) = four indicator (color:#2ecc71) = icon: check
if small and capital letter and number and special character mixed = text: password is strongest (color:#27ae60) = five indicator (color:#27ae60) = icon: check
if password more then 20 letter no matter what = text: password too long (color:#e74c3c) = icon: exclamatory
require message: Password can not be empty.

If your touch and leave then show require message (color:#e74c3c). if only password will validate if only small letter or capital letter or numeric otherwise wrong then error message.
when its validate then check mark will show then message hide. When only error or require message need to pop then only message will show otherwise nothing to show.

5. Confirm Password
Condition: Must required. Must at least 8 letter. Not more than 20 letter.
Validation and error message: for strength indicator:
password less then 8 letter = text: password too small (color:#e74c3c) = one indicator (color:#e74c3c)  = icon: exclamatory
if only small letter or capital letter or numeric but more then 8 letter = text: password is good (color:#f1c40f) = two indicator (color:#f1c40f)  = icon: check
if only special = text: invalid password  (color:#e74c3c)  = one indicator (color:#e74c3c)  = icon: exclamatory
if small and capital letter mixed = text: password is moderate (color:#e67e22) = three indicator (color:#e67e22) = icon: check
if small and capital letter and number mixed = text: password is strong (color:#2ecc71) = four indicator (color:#2ecc71) = icon: check
if small and capital letter and number and special character mixed = text: password is strongest (color:#27ae60) = five indicator (color:#27ae60) = icon: check
require message: Password can not be empty.

If your touch and leave then show require message (color:#e74c3c). if only password will validate if only small letter or capital letter or numeric otherwise wrong then error message.
when its validate then check mark will show then message hide. When only error or require message need to pop then only message will show otherwise nothing to show.

now. for both password. There should be another section for password matched. it can be both way. if user typed confirm password first then main password then password do not match will show
on main one if password not matched. if user type main one first then type confirm one then if confirm not matched then on confirmed it should show password not match. if password not
match then text color (color:#e74c3c)  and icon: exclamatory. means user have to fix. when both password machted then on both text: Password Matched. (color:#2ecc71) and icon check.

  */
"use client";

import { useState } from "react";
import Navbar from "@/components/navbar/page";
import { FiUser, FiMail } from "react-icons/fi";
import { FaExclamationCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { IoLockClosedOutline, IoEye, IoEyeOff, IoClose } from "react-icons/io5";
import { LuUserCircle2 } from "react-icons/lu";
import "./style.css";

export default function Registration() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

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

  return (
    <div className="screen">
      <Navbar />
      <div className="web-container w-full h-full registration flex flex-col items-center">
        <p className="text-3xl font-semibold">Welcome to HealthCare system!</p>
        <p className="text-[16px]">Please register to join with us.</p>
        <form className="flex flex-col items-center mt-10">
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
            <input type="checkbox" name="terms" id="terms" required />
            <label htmlFor="terms">
              I have read and accept all the terms and conditions.
            </label>
            <div className="registration-terms-panel">
              <div className="terms-panel-top">
                <h1>Terms and conditions</h1>
                <IoClose className="terms-close-icon" />
              </div>
              <div className="terms-panel-middle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                quaerat quae laudantium. Maxime odio rem eveniet sint, velit,
                earum amet numquam esse atque consequatur, praesentium corporis.
                Officia enim quae dolore.
              </div>
              <div className="terms-panel-bottom">
                <input
                  type="submit"
                  value="I accepted"
                  className="registrationButton-terms"
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
            <a href="/login" className="registration-register">
              Visit login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

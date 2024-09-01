"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar/page";
import { FiUser, FiMail } from "react-icons/fi";
import { FaExclamationCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { IoLockClosedOutline, IoEye, IoEyeOff } from "react-icons/io5";
import { LuUserCircle2 } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import "./style.css";

export default function Registration() {
  const [passwordStrength, setPasswordStrength] = useState(0);

  const evaluatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length > 6) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/\d/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    setPasswordStrength(strength);
  };

  return (
    <div className="screen">
      <Navbar />
      <div className="web-container w-full h-full registration flex flex-col items-center">
        <p className="text-3xl font-semibold">Welcome to HealthCare system!</p>
        <p className="text-[16px]">Please register to join with us.</p>
        <form className="flex flex-col items-center mt-10">
          {/* Full Name Field */}
          <div className="registration-input">
            <input
              className="registration-inputBox"
              type="text"
              name="fullname"
              id="fullname"
              required
            />
            <LuUserCircle2 className="registration-icon-left" />
            <FaExclamationCircle className="icon-exclamation" />
            <FaCheckCircle className="icon-check-circle" />
            <label className="registration-input-label" htmlFor="fullname">
              Enter your Full Name
            </label>
            <span className="registration-form-error">
              Your name cannot be empty
            </span>
          </div>
          {/* Email Field */}
          <div className="registration-input">
            <input
              className="registration-inputBox"
              type="text"
              name="email"
              id="email"
              required
            />
            <FiMail className="registration-icon-left" />
            <FaExclamationCircle className="icon-exclamation" />
            <FaCheckCircle className="icon-check-circle" />
            <label className="registration-input-label" htmlFor="email">
              Enter your email
            </label>
            <span className="registration-form-error">
              Email cannot be empty
            </span>
          </div>

          {/* Username Field */}
          <div className="registration-input">
            <input
              className="registration-inputBox"
              type="text"
              name="username"
              id="username"
              required
            />
            <FiUser className="registration-icon-left" />
            <FaExclamationCircle className="icon-exclamation" />
            <FaCheckCircle className="icon-check-circle" />
            <label className="registration-input-label" htmlFor="username">
              Enter your username
            </label>
            <span className="registration-form-error">
              Username cannot be empty
            </span>
          </div>

          {/* Password Field with Strength Indicator */}
          <div className="registration-input registration-input-password">
            <input
              className="registration-inputBox"
              type="password"
              name="password"
              id="password"
              required
            />
            <IoLockClosedOutline className="registration-icon-left" />
            <IoEyeOff className="registration-pass-show" />
            <IoEye className="registration-pass-show" />
            <FaExclamationCircle className="icon-exclamation" />
            <FaCheckCircle className="icon-check-circle" />
            <label className="registration-input-label" htmlFor="password">
              Enter your password
            </label>
            <div className="password-strength-panel">
              <span className="registration-form-password-error">
                Enter your password
              </span>
              <div className="password-strength-indicator">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`strength-bar ${
                      i < passwordStrength ? "active" : ""
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="registration-input registration-input-password">
            <input
              className="registration-inputBox"
              type="password"
              name="confirm_password"
              id="confirm_password"
              required
            />
            <IoLockClosedOutline className="registration-icon-left" />
            <IoEyeOff className="registration-pass-show" />
            <IoEye className="registration-pass-show" />
            <FaExclamationCircle className="icon-exclamation" />
            <FaCheckCircle className="icon-check-circle" />
            <label
              className="registration-input-label"
              htmlFor="confirm_password"
            >
              Confirm your password
            </label>
            <div className="password-strength-panel">
              <span className="registration-form-password-error">
                Enter your password
              </span>
              <div className="password-strength-indicator">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`strength-bar ${
                      i < passwordStrength ? "active" : ""
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Terms and condition */}
          <div className="form-registration-terms">
            <input type="checkbox" name="terms" id="terms" />
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

{
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
}

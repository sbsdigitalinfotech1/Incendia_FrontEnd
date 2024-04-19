"use client";

import React, { useEffect, useRef, useState,containerStyle } from "react";

function OtpInput({
  length,
  value,
  setValue,
  containerClassName,
  inputFieldClassName,
}) {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(new Array(length).fill(""));
  // Create refs for input fields

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
    // console.log(inputRefs);
  }, []);

  // Function to focus on next input field
  const focusNextInput = (index) => {
    if (index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Function to focus on previous input field
  const focusPreviousInput = (index) => {
    const newOtp = [...otp];
    newOtp[index] = "";
    setOtp(newOtp);
    if (index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Function to handle key presses
  const handleKeyDown = (event, index) => {
    const value = event.key;
    const newOtp = [...otp];

    if (event.key == "Backspace") {
      return focusPreviousInput(index);
    }

    // Check if the key pressed is a number and the maximum length of the input field is reached
    if (event.key >= "0" && event.key <= "9" && value.length === 1) {
      newOtp[index] = value;
      setOtp(newOtp);
      focusNextInput(index);
    }

    if (index + 1 == length) {
      return setValue(newOtp.join(""));
    }
  };
  return (
    <>
      {otp.map((item, index) => (
        <div className={containerClassName} key={index} style={containerStyle}>
          <input
            ref={(e) => {
              inputRefs.current[index] = e;
            }}
            type="text"
            maxLength={1}
            value={item}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={inputFieldClassName}
          />
        </div>
      ))}
    </>
  );
}

export default OtpInput;

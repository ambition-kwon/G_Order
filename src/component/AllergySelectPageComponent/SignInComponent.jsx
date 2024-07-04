import React, { useState } from "react";
import "./SignInComponent.css";
import CustomTextField from "../CustomComponent/CustomTextField";

const SignInComponent = ({ onLoginClick, userID }) => {
  const [inputValue, setInputValue] = useState("");

  const handleLogin = () => {
    onLoginClick(inputValue);
  };

  return (
    <div className='signInComponent'>
      {userID ? (
        <div className='greetingMessage'>{userID}님 안녕하세요!</div>
      ) : (
        <div className='signInBox'>
          <CustomTextField
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            size='medium'
            backgroundColor='transparent'
            fontColor='white'
            fontSize='15px'
            placeholder='아이디를 입력해주세요.'
          />
          <button className='loginButton' onClick={handleLogin}>
            로그인
          </button>
        </div>
      )}
    </div>
  );
};

export default SignInComponent;

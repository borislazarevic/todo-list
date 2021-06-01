import React from 'react';

import classes from './Input.module.css';

const Input = ({ inputText, setInputText }) => {
  const inputChangeHandler = e => {
    setInputText(e.target.value);
  };

  const clearInputHandler = () => {
    setInputText('');
  };

  return (
    <div className={classes.InputWrapper}>
      <input
        type="text"
        className={classes.Input}
        value={inputText}
        onChange={inputChangeHandler}
      />
      <button type="button" className={classes.ButtonGreen}>
        <i className="fas fa-check" style={{ fontSize: '2.3rem' }}></i>
      </button>
      <button
        type="button"
        className={classes.ButtonRed}
        onClick={clearInputHandler}
      >
        <i className="fas fa-times" style={{ fontSize: '2.3rem' }}></i>
      </button>
    </div>
  );
};

export default Input;

import React from 'react';

import classes from './Input.module.css';

const Input = ({
  inputText,
  setInputText,
  tasks,
  setTasks,
  id,
  active,
  setActive,
}) => {
  const inputChangeHandler = e => {
    setInputText(e.target.value);
  };

  const clearInputHandler = () => {
    setInputText('');
  };

  const addInputHandler = e => {
    e.preventDefault();
    if (inputText.trim() === '') return;
    setTasks([...tasks, { text: inputText.trim(), id: id, completed: false }]);
    setInputText('');
    setActive(prevActive => prevActive + 1);
  };

  return (
    <>
      <form className={classes.Form}>
        <input
          type="text"
          className={classes.Input}
          value={inputText}
          title="Add your task"
          onChange={inputChangeHandler}
        />
        <button
          type="submit"
          className={classes.ButtonGreen}
          onClick={addInputHandler}
        >
          <i className="fas fa-check" style={{ fontSize: '2.3rem' }}></i>
        </button>
        <button
          type="reset"
          className={classes.ButtonRed}
          onClick={clearInputHandler}
        >
          <i className="fas fa-times" style={{ fontSize: '2.3rem' }}></i>
        </button>
      </form>
      <div className={classes.FilterTask}>
        <div className={classes.Active}>
          ACTIVE <span className={classes.ActiveTasks}>{active}</span>
        </div>

        <div className={classes.Complete}>
          COMPLETED <span className={classes.CompletedTasks}>3</span>
        </div>
      </div>
    </>
  );
};

export default Input;

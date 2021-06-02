import React from 'react';

import classes from './Task.module.css';

const Task = ({ tasks, setTasks, text, id }) => {
  const removeTask = () => {
    const removedTask = tasks.filter(task => {
      return id !== task.id;
    });
    setTasks(removedTask);
  };

  return (
    <div className={classes.TaskContainer}>
      <li className={classes.Task}>{text}</li>
      <div className={classes.ButtonWrapper}>
        <button type="button" className={classes.ButtonGreen}>
          <i className="fas fa-check-double" style={{ fontSize: '2rem' }}></i>
        </button>
        <button
          type="button"
          className={classes.ButtonRed}
          onClick={removeTask}
        >
          <i className="fas fa-times" style={{ fontSize: '2rem' }}></i>
        </button>
      </div>
    </div>
  );
};

export default Task;

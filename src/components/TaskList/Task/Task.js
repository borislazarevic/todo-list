import React from 'react';

import classes from './Task.module.css';

const Task = ({ tasks, setTasks, text, id, task, active, setActive }) => {
  const removeTask = () => {
    const removedTask = tasks.filter(task => {
      return id !== task.id;
    });
    setTasks(removedTask);
    if (active < 0) return;
    setActive(prevActive => prevActive - 1);
  };

  const completeTaskHandler = () => {
    const completedTask = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(completedTask);
  };

  return (
    <div
      className={`${classes.TaskContainer} ${
        task.completed ? classes.Completed : classes.InCompleted
      }`}
    >
      <li className={classes.Task}>{text}</li>
      <div className={classes.ButtonWrapper}>
        <button
          type="button"
          className={classes.ButtonGreen}
          onClick={completeTaskHandler}
        >
          <i
            className={`${
              task.completed ? 'fas fa-backward' : 'fas fa-forward'
            }`}
            style={{ fontSize: '2rem', transition: '0.6s ease-in-out' }}
          ></i>
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

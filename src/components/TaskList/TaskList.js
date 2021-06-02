import React from 'react';

import classes from './TaskList.module.css';
import Task from './Task/Task';

const TaskList = ({ tasks, setTasks }) => {
  return (
    <div className={classes.TaskListContainer}>
      <ul className={classes.TaskList}>
        {tasks.map(task => (
          <Task
            key={task.id}
            text={task.text}
            id={task.id}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

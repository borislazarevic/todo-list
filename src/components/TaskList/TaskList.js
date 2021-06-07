import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import classes from './TaskList.module.css';
import Task from './Task/Task';

const TaskList = ({ tasks, setTasks }) => {
  return (
    <div className={classes.TaskListContainer}>
      <Scrollbars
        autoHide
        autoHideTimeout={500}
        autoHideDuration={200}
        style={{
          height: 420,
          width: 700,
        }}
      >
        <ul className={classes.TaskList}>
          {tasks.map(task => (
            <Task
              key={task.id}
              text={task.text}
              id={task.id}
              tasks={tasks}
              setTasks={setTasks}
              task={task}
            />
          ))}
        </ul>
      </Scrollbars>
    </div>
  );
};

export default TaskList;

import React from 'react';

import classes from './ActiveTasks.module.scss';

const ActiveTasks = ({ active, isCompleted }) => {
  return (
    <div className={classes.Active}>
      ACTIVE{' '}
      <span className={classes.ActiveTasks}>
        {active} / {active + isCompleted}
      </span>
    </div>
  );
};

export default ActiveTasks;

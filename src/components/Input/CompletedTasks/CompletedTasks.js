import React from 'react';

import classes from './CompletedTasks.module.css';

const CompletedTasks = ({ active, isCompleted }) => {
  return (
    <div className={classes.Complete}>
      COMPLETED{' '}
      <span className={classes.CompletedTasks}>
        {isCompleted} / {active + isCompleted}
      </span>
    </div>
  );
};

export default CompletedTasks;

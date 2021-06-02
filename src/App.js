import React, { useState } from 'react';
import nextId from 'react-id-generator';

import classes from './App.module.css';
import Input from './components/Input/Input';
import TaskList from './components/TaskList/TaskList';

function App() {
  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState([]);
  const id = nextId();

  return (
    <>
      <div className={classes.App}>
        <h1 className={classes.Title}>Todo List</h1>
      </div>
      <Input
        inputText={inputText}
        setInputText={setInputText}
        tasks={tasks}
        setTasks={setTasks}
        id={id}
      />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;

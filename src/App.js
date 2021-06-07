import React, { useState, useEffect } from 'react';
import nextId from 'react-id-generator';

import classes from './App.module.css';
import Input from './components/Input/Input';
import TaskList from './components/TaskList/TaskList';

function App() {
  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState([]);
  const [active, setActive] = useState(0);
  const id = nextId();

  useEffect(() => {
    const savedActive = localStorage.getItem('active');
    setActive(
      savedActive && savedActive.length > 0 ? JSON.parse(savedActive) : []
    );
  }, []);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    tasks && setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('active', JSON.stringify(active));
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks, active]);

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
        active={active}
        setActive={setActive}
      />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        active={active}
        setActive={setActive}
      />
    </>
  );
}

export default App;

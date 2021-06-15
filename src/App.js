import React, { useState, useEffect } from 'react';

import classes from './App.module.scss';
import Input from './components/Input/Input';
import TaskList from './components/TaskList/TaskList';

function App() {
  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState([]);
  const [active, setActive] = useState(0);
  const [isCompleted, setIsCompleted] = useState(0);

  useEffect(() => {
    const savedIsCompleted = localStorage.getItem('isCompleted');
    setIsCompleted(
      savedIsCompleted && savedIsCompleted.length > 0
        ? JSON.parse(savedIsCompleted)
        : []
    );
  }, []);

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
    localStorage.setItem('isCompleted', JSON.stringify(isCompleted));
  }, [tasks, active, isCompleted]);

  return (
    <>
      <div className={classes.App}>
        <h1 className={classes.Title}>To-Do List</h1>
      </div>
      <Input
        inputText={inputText}
        setInputText={setInputText}
        tasks={tasks}
        setTasks={setTasks}
        active={active}
        setActive={setActive}
        isCompleted={isCompleted}
      />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        active={active}
        setActive={setActive}
        isCompleted={isCompleted}
        setIsCompleted={setIsCompleted}
      />
    </>
  );
}

export default App;

import React, { useState } from 'react';

import classes from './App.module.css';
import Input from './components/Input/Input';

function App() {
  const [inputText, setInputText] = useState('');

  return (
    <>
      <div className={classes.App}>
        <h1 className={classes.Title}>Todo List</h1>
      </div>
      <Input inputText={inputText} setInputText={setInputText} />
    </>
  );
}

export default App;

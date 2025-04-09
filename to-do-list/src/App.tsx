import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './To-Do-List';

function App() {
  const handleClick = () => {
    alert('버튼 클릭!');
  };

  return (
    <div className='container'>
      <ToDoList></ToDoList>
    </div>
  );
}

export default App;

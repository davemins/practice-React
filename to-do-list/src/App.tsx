import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList';
import Timer from './Timer';

function App() {
  const handleClick = () => {
    alert('버튼 클릭!');
  };

  return (
    <div className='container'>
      <ToDoList></ToDoList>
      <Timer></Timer>
    </div>
  );
}

export default App;

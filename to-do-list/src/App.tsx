import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassCom from './ClassCom';
import FunctionCom from './FunctionCom';

function App() {
  const handleClick = () => {
    alert('버튼 클릭!');
  };

  return (
    <div className='container'>
      <ClassCom></ClassCom>
      <FunctionCom></FunctionCom>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

function MyButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button onClick={onClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
      {label}
    </button>
  );
}

function App() {
  const handleClick = () => {
    alert('버튼 클릭!');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>버튼 컴포넌트 한 파일에 작성</h1>
      <MyButton label="클릭해보세요" onClick={handleClick} />
    </div>
  );
}

export default App;

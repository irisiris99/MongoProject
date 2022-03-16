import { useState, useEffect } from "react";
import './App.css';


function App() {

  return (
    <div className="app">
      <div className="header">
        <h1>나의 아이디 보관소</h1>
      </div>
      <div className="table-header">
        <p>No.</p>
        <p>ID</p>
        <p>Password</p>
        <p>사이트</p>
      </div>
    </div>
  );
}

export default App;

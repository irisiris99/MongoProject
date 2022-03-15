import { useState, useEffect } from "react";
import './App.css';


function App() {

  return (
    <div className="app">
      <div className="header">
        <h1>고객 정보 리스트</h1>
      </div>
      <div className="table-header">
        <p>ID</p>
        <p>Name</p>
        <p>Email</p>
        <p>Phone</p>
        <p>Website</p>
        <p>Edit</p>
        <p>Delete</p>
      </div>
    </div>
  );
}

export default App;

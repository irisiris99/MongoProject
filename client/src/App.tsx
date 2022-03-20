import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Users = () => {
  useEffect(() => {
    axios.get('http://localhost:3000/database')
      .then(response => {
        console.log(response)
      });
  }, []);
  return (
    <div>
      <div className="navbar">
        <div className="navbar_logo">
          <h1>IRIS99</h1>
        </div>
      </div>
    </div>
  );
}

export default Users;

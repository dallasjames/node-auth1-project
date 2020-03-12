import React from 'react';
import './App.css';
import Register from './register';
import Login from './login';
import Users from './userList';

function App() {
  return (
    <div className="App">
      <Register />
      <Login />
      <Users />
    </div>
  );
}

export default App;

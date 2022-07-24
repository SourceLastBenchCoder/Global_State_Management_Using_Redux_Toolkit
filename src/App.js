import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  const userName = useSelector((state) => state.user.userName)
  return (
    <div>
      <h1>My Redux App</h1>
      {userName != '' ? <Dashboard /> : <Login />}
    </div>
  );
}

export default App;
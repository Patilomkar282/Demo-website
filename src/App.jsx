import React from 'react';
import './App.css';
import Left from './left/left.jsx';
import Middle from './middle/middle.jsx';
import Right from './right/right.jsx'
function App() {
  return (
    <main>
      <div className="div">
    <Left></Left>
      <Middle></Middle>
        <Right></Right>
        </div>
      
    </main>
  );
}

export default App;
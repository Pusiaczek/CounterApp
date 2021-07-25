import React from 'react';
import './App.css';

import Counter from './Counter';


function App() {
  return (
    <div className="App">
      <h1 className="main-header">Counter App</h1>
      <Counter initValue={8}/>
      <Counter initValue={1}/>
    </div>
  );
}

export default App;

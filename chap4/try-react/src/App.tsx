import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import { AnotherScreen } from './AnotherScreen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/another' element={<AnotherScreen />}/>
          <Route path='/' element={<Home />}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;

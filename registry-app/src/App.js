import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Registry from './routes/Registry';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
         
        <Route path="/registry" element={<Registry/>} />
     
      </Routes>
      </Router>
    </div>
  );
}

export default App;

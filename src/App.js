import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Blog from './components/Blog/Blog'



function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Blog />
    </div>
  );
}

export default App;

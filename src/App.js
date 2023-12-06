import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer'



function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import ContactSection from './assets/Footer'
import { Route, Router, Routes } from 'react-router-dom';
import Resume from './pages/Resume';



export default function App() {
  return (
    <div className="main-font bg-zinc-900">
     
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
        <ContactSection/>
    
    </div>
  );
}

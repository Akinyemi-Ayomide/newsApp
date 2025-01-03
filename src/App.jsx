import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { useContext } from 'react';
import { NavContext } from './context/NavContext';



function App() {
  const { mode } = useContext(NavContext)
  return (
    <>
      <div className={`px-4 sm:px-[5vw] md:px-[7vw] lg-[9vw] ${mode ? 'bg-slate-900' : ''} `}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

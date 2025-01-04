import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { useContext } from 'react';
import { NavContext } from './context/NavContext';
import FoodDeatils from './pages/FoodDeatils';

function App() {
  const { mode } = useContext(NavContext);
  return (
    <>
      <div
        className={`px-4 sm:px-[5vw] md:px-[7vw] lg-[9vw] ${
          mode ? 'bg-black' : ''
        } `}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/FoodDetails/:id" element={<FoodDeatils />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

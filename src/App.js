
import './App.css';
import About from './components/About';
import Choose from './components/Choose';
import Contact from './components/Contact';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Photos from './components/Photos';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/photos" element={<Photos />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>


    </>
  );
}

export default App;

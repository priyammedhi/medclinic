import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use BrowserRouter
import Navbar from './components/Navbar';
import Home from './screens/Home';
import Footer from './components/Footer';
import Servicepage from './screens/Servicepage';
import Aboutus from './screens/Aboutus';
import Selfscrolltop from './components/Selfscrolltop';
import Whatsappicon from './components/Whatsappicon';

function App() {
  return (
    <Router> {/* Now using BrowserRouter */}
      <div className="App">
        <Selfscrolltop />
        <Whatsappicon />
        <Navbar />
        <Home/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Servicepage />} />
          <Route path="/about" element={<Aboutus />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

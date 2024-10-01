import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import Footer from './components/Footer';
import Servicepage from './screens/Servicepage';
import Aboutus from './screens/Aboutus';
import Selfscrolltop from './components/Selfscrolltop';
import Whatsappicon from './components/Whatsappicon';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL || "/"}> {/* Dynamically set basename */}
      <div className="App">
        <Selfscrolltop />
        <Whatsappicon />
        <Navbar />
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
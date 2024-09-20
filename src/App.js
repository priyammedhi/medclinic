import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Use HashRouter
import Navbar from './components/Navbar';
import Home from './screens/Home';
import Footer from './components/Footer';
import Servicepage from './screens/Servicepage';
import Aboutus from './screens/Aboutus';
import Selfscrolltop from './components/Selfscrolltop';

function App() {
  return (
    <Router> {/* Use HashRouter instead of BrowserRouter */}
      <div className="App">
        <Selfscrolltop />
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

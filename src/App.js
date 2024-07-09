import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ComingSoon from './pages/ComingSoon';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;

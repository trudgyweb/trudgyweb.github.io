import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ComingSoon from './pages/ComingSoon';

function App() {
  return (
    <div className="bg-dark" style={{height: "100vh"}}>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/portfolio/" exact element={<ComingSoon />} />
        <Route path="/portfolio/about" exact element={<ComingSoon />} />
        <Route path="/portfolio/contact" exact element={<ComingSoon />} />
        {/* <Route path="/portfolio" exact element={<Home />} />
        <Route path="/portfolio/about" exact element={<About />} />
        <Route path="/portfolio/contact" exact element={<Contact />} /> */}
        {/* <Route path="/" element={} />
        <Route path="/" element={} /> */}
      <Route path="*" element={<Navigate to="/portfolio/" />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

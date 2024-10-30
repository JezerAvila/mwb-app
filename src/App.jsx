import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Home from './componentes/Home';
import AboutMe from './componentes/AboutMe';
import Suggestions from './componentes/Suggestions';
import { ThemeProvider } from './componentes/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/Suggestions" element={<Suggestions />} />
          </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

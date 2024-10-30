import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext'; // Paso 1: Importar el contexto


const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme(); // Paso 2: Obtener el estado del tema y la función de alternar

  return (
    <nav className={isDarkMode ? 'navbar navbar-dark' : 'navbar navbar-light'}>
        
        <Link to="/">Home</Link> 
        <Link to="/AboutMe">About me</Link> 
        <Link to="/Suggestions">Suggestion box</Link> 
        <a href="https://github.com/JezerAvila" target="_blank" rel="noopener noreferrer">Github</a>

        {/* Botón para alternar el tema */}
        <label className="switch" htmlFor="theme-toggle">
          <input 
            type="checkbox" 
            id="theme-toggle" // Asigna un id único al input
            checked={isDarkMode} 
            onChange={toggleTheme} // Cambia el evento onClick por onChange
            readOnly // Solo debe ser manipulado por el label
          />
          <span className="slider round"></span>
        </label>
        

    </nav>
  )
}

export default Navbar
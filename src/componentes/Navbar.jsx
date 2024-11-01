import React, { useState} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext'; // Paso 1: Importar el contexto


const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme(); // Paso 2: Obtener el estado del tema y la función de alternar
  const [isMenuOpen, setIsMenuOpen] = useState(false); //menu hamburguesa
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Función para alternar la visibilidad del menú hamburguesa
  const handleOptionClick = () => setIsMenuOpen(false); // Función para manejar la selección de una opción y cerrar el menú

  return (
    <nav className={isDarkMode ? 'navbar navbar-dark' : 'navbar navbar-light'}>

        <button className="menu-button" onClick={toggleMenu}>
        ☰      {/*  &#9776;    Ícono de hamburguesa */}
        </button>
        
        {/* Menú visible en pantallas grandes y controlado por isMenuOpen en pantallas pequeñas */}
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={handleOptionClick}>Home</Link>
        <Link to="/AboutMe" onClick={handleOptionClick}>About Me</Link>
        <Link to="/Suggestions" onClick={handleOptionClick}>Suggestion Box</Link>
        <a href="https://github.com/JezerAvila" target="_blank" rel="noopener noreferrer" onClick={handleOptionClick}>
          Github
        </a>
      </div>

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
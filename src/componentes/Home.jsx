import React, { useState, useEffect } from 'react';
import UsersList from './UserList';
import './Home.css';
import BotonOk from './BotonOk';
import { useTheme } from './ThemeContext'; 

const Home = () => {

  const { isDarkMode } = useTheme();
  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);





  const texts = [
    "Esta pagina es gratuita, fácil de usar y no necesitas crear una cuenta.",
    "Esta app te ayudará a crear el programa para la reunión de vida y ministerio cristiano, al generar parejas aleatorias a partir de los nombres de los publicadores.",
    "Empieza introduciendo los nombres de los publicadores, cuando termines da clic en el botón 'Generar combinaciones'.",
    "Ahora que tienes todas las posibles combinaciones de parejas, puedes dar clic en el botón 'Seleccionar Parejas Aleatorias' para seleccionar parejas al azar que puedas usar en tu programa de asignaciones.",
    "Las parejas seleccionadas no repiten usuarios y alternan entre Responsables y Ayudantes.",
    "La informacion registrada se guarda en tu navegador local (localStorage) por lo que estara disponible para uso futuro en tu equipo y la puedes eliminar con el boton 'Limpiar Datos'.",
    "Que Jah siga bendiciendo tus esfuerzos por servir a tus hermanos."

    // Sí, si el usuario elige "Eliminar datos de navegación" y selecciona la opción de borrar "Datos de sitios" o "Almacenamiento local", esto eliminará los datos guardados en localStorage. Al borrar los datos de navegación, los navegadores suelen ofrecer opciones como:
    // Historial de navegación.
    // Cookies y otros datos del sitio.
    // Imágenes y archivos en caché.
    // Datos del almacenamiento local (incluye localStorage y sessionStorage).
    // Si el usuario selecciona eliminar Cookies y otros datos del sitio o Almacenamiento local, toda la información almacenada en localStorage será borrada.

  ];

  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false); // Nuevo estado

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let index = 0;
    setIsTypingComplete(false); // Reiniciar al iniciar un nuevo texto

    const intervalId = setInterval(() => {
      setDisplayText(currentText.slice(0, index));
      index++;
      if (index > currentText.length) {
        clearInterval(intervalId);
        setIsTypingComplete(true); // Marcar que el texto ha terminado de escribirse
      }
    }, 50); // Ajusta la velocidad de escritura

    return () => clearInterval(intervalId);
  }, [currentTextIndex]);

  const handleButtonClick = () => {
    if (currentTextIndex < texts.length - 1) {
      setCurrentTextIndex((prevIndex) => prevIndex + 1); // Cambia al siguiente texto
    }
  };

  return (
    <div>
      <br />
      <div className= "home-container">
          <img
          className="oso"
          src={isDarkMode ? `${process.env.PUBLIC_URL}/BearIconDark.png` :`${process.env.PUBLIC_URL}/BearIcon.png`}
          alt="icono"
          />
        <div className={`dialogoOso ${isTypingComplete ? 'show-button' : ''}`}>
          <p>
            {displayText}
            {isTypingComplete && currentTextIndex < texts.length - 1 && (
              <BotonOk onButtonClick={handleButtonClick} />
            )}
          </p>
        </div>
      </div >

      <div className='ListaPublicadores'>
          <h1>MWB-APP</h1>
          <h2>Lista de publicadores</h2>
          <UsersList />
      </div>
      
    </div>
  );
};

export default Home;



/* 
const Home = () => {
  const [displayText, setDisplayText] = useState('');  // Controla el texto que se muestra
  const [currentText, setCurrentText] = useState('');  // Controla el texto que se escribe
  const text1 = "Esta página no guarda información de los usuarios, no necesitas crear una cuenta, es gratuita y fácil de usar.";
  const text2 = "Esta app te ayudará a crear el programa para la reunión de vida y ministerio cristiano, al generar parejas aleatorias a partir de los nombres de los publicadores.";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayText(currentText.slice(0, index));  // Va escribiendo letra por letra
      index++;
      if (index > currentText.length) {
        clearInterval(intervalId);
      }
    }, 40);  // Ajusta la velocidad de escritura
    return () => clearInterval(intervalId);
  }, [currentText]);

  const handleButtonClick = () => {
    setDisplayText('');  // Limpia el texto actual
    setCurrentText(text2);  // Cambia el texto al segundo mensaje
  };

  useEffect(() => {
    setCurrentText(text1);  // Inicializa con el texto1
  }, []);

  return (
    <div>
      <br />
      <div className="home-container">
        <img className="oso" src="/BearIcon.png" alt="icono" />
        <div className={`dialogoOso ${displayText.length === currentText.length ? 'show-button' : ''}`}>
         <p>{displayText}</p>
         <BotonOk onButtonClick={handleButtonClick} />
        </div>
      </div>
      <h1>MWB-APP</h1>
      <h2>Lista de publicadores</h2>
      <UsersList />
    </div>
  );
};

export default Home;
 */
import React, { useState } from 'react';
import './BotonSeleccionAleatoria.css';

const BotonSeleccionAleatoria = ({ users, pairs }) => {
  const [arrayNuevo, setArrayNuevo] = useState([]);
  const [mostrar, setMostrar] = useState(false);

  const seleccionarParejas = () => {
    let parejasRestantes = [...pairs];
    const nuevoArray = [];

    while (parejasRestantes.length > 0) {
      let usuariosDisponibles = [...users];
      const parejasSeleccionadas = [];

      console.log("Usuarios disponibles al inicio del ciclo:", usuariosDisponibles);
      console.log("Parejas restantes al inicio del ciclo:", parejasRestantes);

      while (usuariosDisponibles.length > 1 && parejasRestantes.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * parejasRestantes.length);
        const pareja = parejasRestantes[indiceAleatorio];
        const [usuario1, usuario2] = pareja;

        if (usuariosDisponibles.includes(usuario1) && usuariosDisponibles.includes(usuario2)) {
          parejasSeleccionadas.push(pareja);
          usuariosDisponibles = usuariosDisponibles.filter(u => u !== usuario1 && u !== usuario2);
          parejasRestantes = parejasRestantes.filter(p => !(p[0] === usuario1 && p[1] === usuario2));
          console.log("Pareja seleccionada:", pareja);
        }
      }

      if (usuariosDisponibles.length === 1) {
        parejasSeleccionadas.push(`falto: ${usuariosDisponibles[0]}`);
      }

      if (parejasSeleccionadas.length > 0) {
        nuevoArray.push(...parejasSeleccionadas);
        if (parejasRestantes.length > 0) {
          nuevoArray.push('/');
        }
      }

      console.log("Parejas seleccionadas en este ciclo:", parejasSeleccionadas);
    }

    console.log("Array final de parejas seleccionadas:", nuevoArray);
    setArrayNuevo(nuevoArray);
    setMostrar(true);
  };

  return (
    <div className='combinaciones'>
      <button className='combinaciones__boton' onClick={seleccionarParejas}>Seleccionar Parejas Aleatorias</button>
      {mostrar && (
        <div>
          <h2 className='combinaciones__titulo'>Combinaciones Aleatorias</h2>
          <ul className='combinaciones__lista'>
            {arrayNuevo.map((item, index) => (
              <li key={index}>
                {typeof item === 'string' ? item : `${item[0]} y ${item[1]}`}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BotonSeleccionAleatoria;

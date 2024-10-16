import React, { useState } from 'react';
import './BotonSeleccionAleatoria.css';


const BotonSeleccionAleatoria = ({ users, pairs }) => {
  const [arrayNuevo, setArrayNuevo] = useState([]);
  const [mostrar, setMostrar] = useState(false);

  const seleccionarParejas = () => {
    let parejasRestantes = [...pairs];
    let usuariosDisponibles = new Set(users); // Usar un Set para mejor rendimiento
    const parejasSeleccionadas = [];

    // Iteramos sobre las parejas restantes hasta que no queden más usuarios disponibles
    while (usuariosDisponibles.size > 1 && parejasRestantes.length > 0) {
      const indiceAleatorio = Math.floor(Math.random() * parejasRestantes.length);
      const pareja = parejasRestantes[indiceAleatorio];
      const [usuario1, usuario2] = pareja;

      // Verificamos si ambos usuarios están disponibles en el set
      if (usuariosDisponibles.has(usuario1) && usuariosDisponibles.has(usuario2)) {
        parejasSeleccionadas.push(pareja);
        usuariosDisponibles.delete(usuario1); // Eliminar usuarios del Set
        usuariosDisponibles.delete(usuario2);
        parejasRestantes.splice(indiceAleatorio, 1); // Eliminar la pareja seleccionada de las restantes
      }
    }

    // Si queda un usuario disponible sin pareja
    if (usuariosDisponibles.size === 1) {
      const usuarioSobrante = Array.from(usuariosDisponibles)[0];
      parejasSeleccionadas.push(`Faltó: ${usuarioSobrante}`);
    }

    // Actualizamos el estado con las nuevas parejas seleccionadas
    setArrayNuevo(parejasSeleccionadas);
    setMostrar(true);
  };

  //se marcaran las parejas en la lista de combinaciones y se borraran de la seleccion aunque sigan desplegandose
  const UsarParejas = () => {};


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
          <button className='combinaciones__usar' onClick={UsarParejas}>Usar Parejas</button>
        </div>
      )}
    </div>
  );
};

export default BotonSeleccionAleatoria;

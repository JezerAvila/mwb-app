import React,  { useState, useEffect } from 'react';
import './BotonSeleccionAleatoria.css';


export default function BotonSeleccionAleatoria ({ users, pairs, onUsarParejas, parejasUsadas }) {
  const [arrayNuevo, setArrayNuevo] = useState([]);
  const [mostrar, setMostrar] = useState(false);

  //Recuperar las parejas usadas al cargar la página
  useEffect(() => {
    const parejasUsadasGuardadas = JSON.parse(localStorage.getItem('parejasUsadas')) || [];
    onUsarParejas(parejasUsadasGuardadas);  // Recuperar parejas usadas del localStorage al cargar
  }, []); // El array vacío asegura que solo se ejecute una vez al montar el componente
  

    const seleccionarParejas = () => {
    // Copiamos las parejas restantes pero filtramos aquellas que ya han sido usadas
    let parejasRestantes = pairs.filter((pareja) => !esParejaUsada(pareja));
    
    let usuariosDisponibles = new Set(users);
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


  const UsarParejas = () => {
    const parejasUsadasPrevias = JSON.parse(localStorage.getItem('parejasUsadas')) || [];
    const nuevasParejasUsadas = [...parejasUsadasPrevias, ...arrayNuevo];
  
    // Guardar las nuevas parejas usadas en el localStorage
    localStorage.setItem('parejasUsadas', JSON.stringify(nuevasParejasUsadas));

    onUsarParejas(arrayNuevo);  // Notificar al componente padre
    setArrayNuevo([]);  // Limpiar el array de parejas seleccionadas
  };

  const esParejaUsada = (pareja) => {
    return parejasUsadas.some(
      (parejaUsada) => parejaUsada[0] === pareja[0] && parejaUsada[1] === pareja[1]
    );
  };

  return (

   

    <div className='combinaciones'>
      <button className='combinaciones__boton' onClick={seleccionarParejas}>Seleccionar Parejas Aleatorias</button>
      {mostrar && (
        <div>
          <h2 className='combinaciones__titulo'>Combinaciones Aleatorias</h2>
          <ul className='combinaciones__lista'>
            {arrayNuevo.map((item, index) => (
              <li key={index} className={esParejaUsada(item) ? 'pareja-usada' : ''}>
              {typeof item === 'string' ? item : `${item[0]} y ${item[1]}`}
            </li>
            ))}
          </ul>
          <button className='combinaciones__usar' onClick={UsarParejas}>Usar Parejas</button>
        </div>
      )}
    </div>
  )
};



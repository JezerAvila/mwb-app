import React,  { useState, useEffect } from 'react';
import './BotonSeleccionAleatoria.css';
import Swal from 'sweetalert2'; 
import { useTheme } from './ThemeContext'; 


export default function BotonSeleccionAleatoria ({ users, pairs, onUsarParejas, parejasUsadas }) {
  const [arrayNuevo, setArrayNuevo] = useState([]);
  const [mostrar, setMostrar] = useState(false);
  const [responsablesPrevios, setResponsablesPrevios] = useState([]); // Responsables de la selección anterior
  const [parejasInvertidas, setParejasInvertidas] = useState({}); // Estado para controlar si una pareja está invertida visualmente

  const { isDarkMode } = useTheme(); //para el tema oscuro 


  // Recuperar las parejas y responsables usados al cargar la página
  useEffect(() => {
    const parejasUsadasGuardadas = JSON.parse(localStorage.getItem('parejasUsadas')) || [];
    const responsablesGuardados = JSON.parse(localStorage.getItem('responsablesPrevios')) || [];
    onUsarParejas(parejasUsadasGuardadas);  // Recuperar parejas usadas del localStorage al cargar
    setResponsablesPrevios(responsablesGuardados);  // Recuperamos los responsables previos del localStorage
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

    // Determinar responsables según las parejas seleccionadas (teniendo en cuenta la inversión visual)
    const nuevosResponsables = arrayNuevo.map((pareja, index) =>
      parejasInvertidas[index] ? pareja[1] : pareja[0] // Tomar al primer miembro de la pareja, o al segundo si está invertido
    );

    // Solo almacenar los responsables de la última selección
    setResponsablesPrevios(nuevosResponsables);
  
    localStorage.setItem('responsablesPrevios', JSON.stringify(nuevosResponsables));

    onUsarParejas(arrayNuevo);  // Notificar al componente padre
    setArrayNuevo([]);  // Limpiar el array de parejas seleccionadas
  };


  const esParejaUsada = (pareja) => {
    return parejasUsadas.some(
      (parejaUsada) => 
        (parejaUsada[0] === pareja[0] && parejaUsada[1] === pareja[1]) ||
        (parejaUsada[0] === pareja[1] && parejaUsada[1] === pareja[0]) // También considera el orden invertido
    );
  };


  // Función para invertir el orden visual de la pareja
  const invertirPareja = (index) => {
    setParejasInvertidas((prevState) => ({
      ...prevState,
      [index]: !prevState[index]  // Alternar entre invertido y no invertido
    }));
  };


  //Esta función se encargará de limpiar el localStorage 
  const limpiarDatos = () => {
    // Eliminar todos los datos del localStorage
    localStorage.clear();
  
    // Mostrar SweetAlert2 en lugar del alert tradicional
    Swal.fire({
      title: 'Datos eliminados',
      text: 'Todos los datos han sido eliminados correctamente.',
      icon: 'success',  // Icono de éxito ('warning', 'error', 'info', 'success')
      confirmButtonText: 'OK',
      background: '#f9f9f9',
      confirmButtonColor: '#3085d6',
      imageUrl: '/datosBorrados.jpg',  // Desde la carpeta public
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: 'Imagen de eliminación',
    }).then(() => {
      // También puedes limpiar cualquier estado relacionado
      setArrayNuevo([]);  // Limpiar parejas seleccionadas
      setResponsablesPrevios([]);  // Limpiar responsables
      onUsarParejas([]);  // Notificar al padre que no hay parejas usadas
      window.location.reload(); // Recargar la página después de que el usuario cierre la alerta
    });
  };

  

  return (

   

    <div className='combinaciones'>
      <button className='combinaciones__boton' onClick={seleccionarParejas}>Seleccionar Parejas Aleatorias</button>
      <button className='combinaciones__boton' onClick={limpiarDatos}>Limpiar Datos</button>
      {mostrar && (
        <div>
          <h2 className='combinaciones__titulo'>Combinaciones Aleatorias</h2>
          <ul className = {isDarkMode? 'combinaciones__lista-dark':'combinaciones__lista-light'}>
            {arrayNuevo.map((item, index) => (
              <li key={index} className={esParejaUsada(item) ? 'pareja-usada' : ''}>
                  {typeof item === 'string' ? (
                  item
                  ) : (
                    <>
                          <span className="usuario1">
                            {parejasInvertidas[index] ? item[1] : item[0]}
                          </span>
                          y
                          <span className="usuario2">
                            {parejasInvertidas[index] ? item[0] : item[1]}
                          </span>
                          <button className='botonInvertirOrden' onClick={() => invertirPareja(index)}>
                            Invertir Orden
                          </button>
                    </>
                )}
              </li>
            ))}
          </ul>
          
                    {/* Sección para mostrar los responsables de la selección anterior */}
                {responsablesPrevios.length > 0 && (
                  <div className='responsables__contenedor'>
                    <h3>Responsables en la selección anterior:</h3>
                    <ul className='responsables__lista'>
                      {responsablesPrevios.map((responsable, index) => (
                        <li key={index}>{responsable}</li>
                      ))}
                    </ul>
                  </div>
                )}

       

          <button className='combinaciones__usar' onClick={UsarParejas}>Usar Parejas</button>
        </div>
      )}

    </div>
  )
};



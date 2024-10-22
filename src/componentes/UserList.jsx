import React, { useState, useEffect } from 'react';
import './UserList.css'; // Asegúrate de importar el archivo CSS para los estilos
import BotonSeleccionAleatoria from './BotonSeleccionAleatoria';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');
  const [pairs, setPairs] = useState([]);  // Estado para las combinaciones
  const [parejasUsadas, setParejasUsadas] = useState([]);  // Nuevo estado para las parejas usadas

  const usarParejas = (nuevasParejas) => {
    setParejasUsadas(prev => [...prev, ...nuevasParejas]); // Agregar las nuevas parejas usadas
};

  // Cargar usuarios desde localStorage cuando el componente se monta
  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  // Guardar usuarios en localStorage cada vez que cambien
  useEffect(() => {
    if (users.length > 0) {  // Solo guardar si hay usuarios
      localStorage.setItem('users', JSON.stringify(users));
    }
  }, [users]);

  const addUser = () => {
    if (user.trim()) {  // Verificar que no esté vacío
      const newUsers = [...users, user];
      setUsers(newUsers);
      setUser('');
    }
  };

  const removeUser = (index) => {
    const newUsers = users.filter((_, i) => i !== index);
    setUsers(newUsers);
  };

  // Función para generar las combinaciones de parejas
  const generatePairs = () => {
    const newPairs = [];
    // Generar todas las combinaciones posibles de dos personas
    for (let i = 0; i < users.length; i++) {
      for (let j = i + 1; j < users.length; j++) {
        newPairs.push([users[i], users[j]]);
      }
    }
    setPairs(newPairs); // Actualizar el estado de las combinaciones
  };

  // Guardar combinaciones en localStorage cada vez que cambien
  useEffect(() => {
    if (pairs.length > 0) {  // Solo guardar si hay combinaciones
      localStorage.setItem('pairs', JSON.stringify(pairs));
    }
  }, [pairs]);  //antes [pairs]

  // Cargar combinaciones desde localStorage cuando el componente se monta
  useEffect(() => {
    const storedPairs = localStorage.getItem('pairs');
    if (storedPairs) {
      setPairs(JSON.parse(storedPairs));
    }
  }, []);

    // Manejar las parejas usadas
    const handleUsarParejas = (parejasSeleccionadas) => {
      setParejasUsadas([...parejasUsadas, ...parejasSeleccionadas]);  // Agregar parejas seleccionadas a las usadas
    };

  return (
    <div className="user-list-container">
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        className="user-input" // Clase para el input
        placeholder="Agregar publicador..."
      />
      <button onClick={addUser} className="add-button">Agregar</button>
      <ul className="users-list"> {/* Clase para la lista */}
        {users.map((user, index) => (
          <li key={index} className="user-item"> {/* Clase para cada elemento de la lista */}
            <span className="user-name">{user}</span> {/* Clase para el nombre */}
            <button onClick={() => removeUser(index)} className="remove-button">X</button>
          </li>
        ))}
      </ul>

      <div className="footer-container">
        <p>Total de publicadores: {users.length}</p>

        {/* Mostrar el botón de generar combinaciones solo si hay más de 3 usuarios */}
        {users.length >= 3 && (
          <button
            onClick={generatePairs}  // Llamada directa a la función
            className="generate-button">Generar Combinaciones</button>
        )}
      </div>

      {/* Mostrar las combinaciones de parejas en un cuadro de texto */}
      {pairs.length > 0 ? (
        <div>
          <div className="pairs-list"> 
              {/* {JSON.stringify(pairs, null, 2)} */}
              {pairs.map((pair, index) => (
          <div
              key={index}
              className={parejasUsadas.some(
                p => p[0] === pair[0] && p[1] === pair[1]
              ) ? 'pareja-usada' : ''}  // Se agrega la clase 'pareja-usada' si la pareja está en 'parejasUsadas'
          >
            {pair[0]} y {pair[1]}
          </div>
      ))}
    </div>



          {/* Contenedor del párrafo y el botón */}
          <div className="footer">
            <p>Total de combinaciones: {pairs.length}</p>
            <BotonSeleccionAleatoria 
            users={users} 
            pairs={pairs} 
            onUsarParejas={usarParejas} 
            parejasUsadas={parejasUsadas} // Pasa el estado de parejas usadas
            />
          </div>
        </div>
      ) : (
        <p>No hay combinaciones disponibles.</p>
      )}
    </div>
  )
};

export default UserList;

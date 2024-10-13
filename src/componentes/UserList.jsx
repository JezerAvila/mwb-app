import React, { useState, useEffect } from 'react';
import './UserList.css'; // Asegúrate de importar el archivo CSS para los estilos

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');
  const [pairs, setPairs] = useState([]);  // Estado para las combinaciones

  // Cargar usuarios desde localStorage cuando el componente se monta
  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    //console.log('Cargando desde localStorage:', storedUsers);  // Debug
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  // Guardar usuarios en localStorage cada vez que cambien
  useEffect(() => {
    if (users.length > 0) {  // Solo guardar si hay usuarios
      //console.log('Guardando en localStorage:', users);  // Debug
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
        newPairs.push(`${users[i]} - ${users[j]}`);
      }
    }
    setPairs(newPairs); // Actualizar el estado de las combinaciones
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
              className="generate-button"
            >
              Generar combinaciones
            </button>
          )}
      </div>
      


      {/* Mostrar las combinaciones en un <ul> */}
      <ul className="pairs-list">
        {pairs.length > 0 ? (
          pairs.map((pair, index) => (
            <li key={index} className="pair-item">
              {pair}
            </li>
          ))
        ) : (
          <p>No hay combinaciones disponibles.</p>
        )}
      </ul>
      <p>Total de combinaciones: {pairs.length}</p>
      
    </div>
  );
};

export default UserList;

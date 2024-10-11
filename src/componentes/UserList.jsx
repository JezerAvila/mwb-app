import React, { useState, useEffect } from 'react';
import './UserList.css'; // Asegúrate de importar el archivo CSS para los estilos

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');

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
      <p>Total de publicadores: {users.length}</p>
    </div>
  );
};

export default UserList;

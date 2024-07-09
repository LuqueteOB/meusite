import React from 'react';
import { Link } from 'react-router-dom';

const UsersPage = ({ users }) => {
  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`} className="user-link">{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;


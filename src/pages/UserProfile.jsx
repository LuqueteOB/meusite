
import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = ({ users }) => {
  const { id } = useParams(); // Usando o hook useParams para acessar o parâmetro da URL

  // Verifica se users está definido e não está vazio antes de usar find
  const user = users && users.length > 0 ? users.find(user => user.id === id) : null;

  return (
    <>
      <h1>Perfil de Usuário</h1>
      {user ? (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ marginRight: '20px' }}>
            <img src={`https://via.placeholder.com/150?text=${user.name}`} alt={`Foto de ${user.name}`} style={{ borderRadius: '50%', width: '150px', height: '150px' }} />
          </div>
          <div>
            <p>Nome: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        </div>
      ) : (
        <p>Usuário não encontrado!</p>
      )}
    </>
  );
};

export default UserProfile;

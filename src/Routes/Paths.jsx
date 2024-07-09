import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLayout from '../assets/layouts/PageLayouts';
import NotFound from '../pages/NotFound';
import UsersPage from '../pages/UsersPage'; // Importe o componente UsersPage aqui

// Componentes de página usando lazy loading
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const UserProfile = lazy(() => import('../pages/UserProfile')); // Componente para perfil de usuário

// Lista de usuários de exemplo
const users = [
  { id: '1', name: 'John Doe', email: 'john@example.com' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
  { id: '3', name: 'Michael Johnson', email: 'michael@example.com' }
];

const Paths = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="users" element={<UsersPage users={users} />} /> {/* Rota para página de usuários */}
            <Route path="user/:id" element={<UserProfile users={users} />} /> {/* Rota com parâmetro dinâmico para perfil de usuário */}
          </Route>
          <Route>
            <Route path="*" element={<NotFound />} />
          </Route>
       </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Paths;
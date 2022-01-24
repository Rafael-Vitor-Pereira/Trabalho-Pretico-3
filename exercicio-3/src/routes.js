import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Clubes from './pages/Clubes';
import FormularioCadadastrar from './pages/FormularioCadastrar';
import FormularioEditar from './pages/FormularioEditar';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Clubes />} />
      <Route path="cadastro" element={<FormularioCadadastrar />} />
      <Route path="editar/:id" element={<FormularioEditar />} />
    </Routes>
  );
};

export default AppRoutes;

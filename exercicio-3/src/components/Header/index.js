import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <NavLink to="/" activeclassName="badge badge-primary" end>
        Clubes
      </NavLink>{' '}
      |{' '}
      <NavLink to="cadastro" activeclassName="badge badge-primary">
        Cadastro
      </NavLink>
    </nav>
  );
};

export default Header;

import React, { useState } from 'react';
import { MenuWrapper, MenuLogo } from './styles';
import Logo from '../../assets/icons/bird.svg';
import MenuOpen from '../../assets/icons/menu-open.svg';
import MenuClosed from '../../assets/icons/menu-closed.svg';
import { Link } from 'react-router-dom';

export function Menu() {
  const [isMenuOpen, setMenuState] = useState(false);
  return (
    <MenuWrapper isMenuOpen={isMenuOpen}>
      <div className="container">
        <nav style={{ flex: 1 }}>
          <MenuLogo src={Logo} />
          <Link to='/Cadastro'>
            Cadastro
          </Link>
          <Link to='/Login'>
            Login
          </Link>
        </nav>
        <nav>
          <div style={{ marginRight: '1rem' }}>
            <input placeholder="Pesquisar" />
          </div>
          <a href={`/logout`}>
            Sair
          </a>
          <button onClick={() => setMenuState(!isMenuOpen)}>
            {isMenuOpen && <img src={MenuOpen} />}
            {!isMenuOpen && <img src={MenuClosed} />}
          </button>
        </nav>
      </div>
    </MenuWrapper>
  )
}

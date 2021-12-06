import React, { useState } from 'react';
import { logout } from '../../services/auth';
import { MenuWrapper, MenuLogo } from './styles';
import Logo from '../../assets/icons/bird.svg';
import MenuOpen from '../../assets/icons/menu-open.svg';
import MenuClosed from '../../assets/icons/menu-closed.svg';
import { Link } from 'react-router-dom';
import { UseAuthProvider } from '../../contexts/authContext';
import { useHistory } from 'react-router-dom';


export function Menu() {
  const [isMenuOpen, setMenuState] = useState(false);
  const [{ auth }] = UseAuthProvider();
  
  const history = useHistory();

  async function efetuarLogout() {
    const result = await logout(auth);
    if (result.status === 200) {
      history.push('/login');
    } else {
      console.log('Erro');
    }
  }
  return (
    <MenuWrapper isMenuOpen={isMenuOpen}>
      <div className="container">
        <nav style={{ flex: 1 }}>
          <MenuLogo src={Logo} />
          <Link to='/Register'>
            Cadastro de usuário
          </Link>
          <Link to='/Consulta'>
            Consulta
          </Link>
          <Link to='/Noticias'>
            Notícias
          </Link>
          <Link to='/Table'>
            Table
          </Link>
          <Link to='/Login'>
            Login
          </Link>
          <Link to='/User'>
            User
          </Link>
        </nav>
        <nav>
          <div style={{ marginRight: '1rem' }}>
            <input placeholder="Pesquisar" />
          </div>
          <a href='#' onClick={() => efetuarLogout()}>
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

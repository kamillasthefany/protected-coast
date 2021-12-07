/* eslint-disable  */
import React, { useState } from 'react';
import { logout } from '../../services/auth';
import { MenuWrapper, MenuLogo } from './styles';
import Logo from '../../assets/icons/bird.svg';
import MenuOpen from '../../assets/icons/menu-open.svg';
import MenuClosed from '../../assets/icons/menu-closed.svg';
import { Link } from 'react-router-dom';
import { UseAuthProvider } from '../../contexts/authContext';
import { useEfetuarLogout } from '../../queries/user';
import { useHistory } from 'react-router-dom';


export function Menu() {
  const [isMenuOpen, setMenuState] = useState(false);
  const [{ auth }] = UseAuthProvider();

  const history = useHistory();

  const redirectUser = () => {
    history.push('/home');
  };

  async function efetuarLogout() {
    const resultado = await logout(auth);
    //const resultado = await useEfetuarLogout(auth);
    if (resultado.status === 200) {

      localStorage.clear();
      sessionStorage.clear();
      history.push('/');
      window.location.reload();
    } else {
      console.log('Erro');
    }
  }
  return (
    <MenuWrapper isMenuOpen={isMenuOpen}>
      <div className="container">
        <nav style={{ flex: 1 }}>
          <MenuLogo src={Logo} onClick={() => redirectUser()} style={{ cursor: 'pointer' }} />
          <Link to='/Consulta'>
            Consulta
          </Link>
          <Link to='/Noticias'>
            Notícias
          </Link>
          <Link to='/Table'>
            Table
          </Link>
          <Link to='/User'>
            User
          </Link>
          <Link to='/Aguarde'>
            404
          </Link>
        </nav>
        <nav>
          <div style={{ marginRight: '1rem' }}>
            <input placeholder="Pesquisar" />
          </div>
          <a onClick={() => efetuarLogout()} style={{ cursor: 'pointer' }}>
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

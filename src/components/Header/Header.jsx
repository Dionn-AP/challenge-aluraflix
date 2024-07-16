// src/components/Header.js
import React from 'react';
import {
  HeaderContainer
} from './style'

const Header = () => {
  return (
    <HeaderContainer>
      <div className="logo">Aluraflix</div>
      <nav>
        <ul>
          <li><a href="/">Página Inicial</a></li>
          <li><a href="/novo-video">Novo Vídeo</a></li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}

export default Header;

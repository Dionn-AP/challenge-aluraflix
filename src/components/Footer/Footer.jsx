// src/components/Footer.js
import React from 'react';
import {
  FooterContainer,
  FooterLogo
} from './style';

const Footer = () => {
  return (
    <FooterContainer className="footer">
      <FooterLogo className="logo">Aluraflix</FooterLogo>
    </FooterContainer>
  );
}

export default Footer;

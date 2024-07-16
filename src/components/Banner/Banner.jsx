// src/components/Banner.js
import React from 'react';
import {
  BannerContainer,
  BannerImage
} from './style';

const Banner = ({ imageUrl }) => {
  return (
    <BannerContainer className="banner">
      <BannerImage src={imageUrl} alt="Vídeo em destaque" />
    </BannerContainer>
  );
}

export default Banner;

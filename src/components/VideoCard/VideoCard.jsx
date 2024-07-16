// src/components/VideoCard.js
import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import {
  VideoCardContainer,
  VideoCardButton,
  VideoCardImage,
  VideoCardParagraphy,
  VideoCardTitle
} from './style';

const VideoCard = ({ video }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <VideoCardContainer>
      <VideoCardImage src={video.image} alt={video.title} />
      <VideoCardTitle>{video.title}</VideoCardTitle>
      <VideoCardParagraphy>{video.description}</VideoCardParagraphy>
      <VideoCardButton onClick={handleEditClick}>Editar</VideoCardButton>
      <button>Excluir</button>
      {isModalOpen && <Modal video={video} onClose={handleModalClose} />}
    </VideoCardContainer>
  );
}

export default VideoCard;

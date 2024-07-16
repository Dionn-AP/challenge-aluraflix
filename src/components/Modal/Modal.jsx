// src/components/Modal.js
import React, { useState } from 'react';
import {
  ModalContainer,
  ModalContent,
  ModalButton,
  ModalCloseButton,
  ModalForm,
  ModalLabel,
  ModalSelect,
  ModalStyleDefault,
  ModalTextArea,
  ModalTitle
} from './style';

const Modal = ({ video, onClose }) => {
  const [formData, setFormData] = useState(video);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Salvar os dados atualizados
    onClose();
  };

  return (
    <ModalContainer>
      <ModalContent>
        <ModalTitle>Editar Card</ModalTitle>
        <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
        <ModalForm onSubmit={handleSubmit}>
          <ModalLabel>
            Título:
            <ModalStyleDefault
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </ModalLabel>
          <ModalLabel>
            Categoria:
            <ModalSelect
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="inovacao">Inovação</option>
              <option value="gestao">Gestão</option>
            </ModalSelect>
          </ModalLabel>
          <ModalLabel>
            Imagem:
            <ModalStyleDefault
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </ModalLabel>
          <ModalLabel>
            Vídeo:
            <ModalStyleDefault
              type="text"
              name="video"
              value={formData.video}
              onChange={handleChange}
            />
          </ModalLabel>
          <ModalLabel>
            Descrição:
            <ModalTextArea
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></ModalTextArea>
          </ModalLabel>
          <ModalButton type="submit">Salvar</ModalButton>
          <ModalButton type="reset">Limpar</ModalButton>
        </ModalForm>
      </ModalContent>
    </ModalContainer>
  );
}

export default Modal;

import styled from 'styled-components';

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`  

export const ModalContent = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
    width: 400px;
    max-width: 100%;
    position: relative;
`

export const ModalTitle = styled.h2`
    margin-top: 0;
`

export const ModalCloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 16px;
`

export const ModalForm = styled.form`
    display: flex;
    flex-direction: column;
`

export const ModalLabel = styled.label`
    margin-bottom: 10px;
`

export const ModalStyleDefault = styled.input`
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
`

export const ModalSelect = styled.select`
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
`

export const ModalTextArea = styled.textarea`
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
`

export const ModalButton = styled.button`
    padding: 10px;
    font-size: 16px;
    margin-top: 10px;
`


import styled from "styled-components";

export const VideoCardContainer = styled.div`
    width: 20rem;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fff;
    text-align: center;
` 

export const VideoCardImage = styled.img`
    width: 100%;
    height: 100px;
    object-fit: cover;
` 

export const VideoCardTitle = styled.h2`
    font-size: 18px;
    margin: 10px 0;
`

export const VideoCardParagraphy = styled.p`
    font-size: 14px;
    color: #666;
`

export const VideoCardButton = styled.button`
    margin: 5px;
    padding: 5px 10px;
    font-size: 14px;
`
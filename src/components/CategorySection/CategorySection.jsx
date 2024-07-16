// src/components/CategorySection.js
import React from 'react';
import VideoCard from '../VideoCard/VideoCard';
import {
  CategoryContainer,
  CategoryTitle,
  CategoryVideoCard
} from './style';

const CategorySection = ({ title, videos }) => {
  return (
    <CategoryContainer>
      <CategoryTitle>{title}</CategoryTitle>
      <CategoryVideoCard>
        {videos.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </CategoryVideoCard>
    </CategoryContainer>
  );
}

export default CategorySection;

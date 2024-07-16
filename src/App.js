// src/App.js
import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import CategorySection from './components/CategorySection/CategorySection';
import Footer from './components/Footer/Footer';
import BannerImage from './assets/banner.png';
import FrontendImageOne from './assets/fronend-image-01.png';
import FrontendImageTwo from './assets/fronend-image-02.png';
import FrontendImageThree from './assets/fronend-image-03.png';

const videos = {
  frontend: [
    { title: 'React Basics', category: 'frontend', image: FrontendImageOne, video: 'url_to_video', description: 'Learn the basics of React.' },
    { title: 'React Basics', category: 'frontend', image: FrontendImageTwo, video: 'url_to_video', description: 'Learn the basics of React.' },
    { title: 'React Basics', category: 'frontend', image: FrontendImageThree, video: 'url_to_video', description: 'Learn the basics of React.' }
    // Adicione mais vídeos conforme necessário
  ],
  backend: [
    { title: 'Node.js Basics', category: 'backend', image: 'url_to_image', video: 'url_to_video', description: 'Learn the basics of Node.js.' },
    // Adicione mais vídeos conforme necessário
  ],
  inovacao: [
    { title: 'Innovative Thinking', category: 'inovacao', image: 'url_to_image', video: 'url_to_video', description: 'Learn about innovative thinking.' },
    // Adicione mais vídeos conforme necessário
  ],
  gestao: [
    { title: 'Management Skills', category: 'gestao', image: 'url_to_image', video: 'url_to_video', description: 'Learn about management skills.' },
    // Adicione mais vídeos conforme necessário
  ]
};

const App = () => {
  return (
    <div className="App">
      <Header />
      <Banner imageUrl={BannerImage} />
      <main>
        <CategorySection title="Frontend" videos={videos.frontend} />
        <CategorySection title="Backend" videos={videos.backend} />
        <CategorySection title="Inovação" videos={videos.inovacao} />
        <CategorySection title="Gestão" videos={videos.gestao} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

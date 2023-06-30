
import './App.css';
import Navbar from './components/navbar/Navbar';

import HeroSection from './components/heroSection/HeroSection';
import ImageSection from './components/imageSection/ImageSection';
import GalleryCards from './components/gallery/GalleryCards';

function App() {
  return (
    <div className='components-container'>
      <Navbar />
      <HeroSection />
      <ImageSection />
      <GalleryCards />

    </div>
  );
}

export default App;

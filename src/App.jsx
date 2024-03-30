import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery';
import CustomLoader from './Loader';
import ErrorMessage from './ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn';
import ImageModal from './ImageModal';

function App() {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos', {
          params: {
            client_id: 'xogthnLMHTngN01rgyyuntTTupu7L3Oqm5gTLKufwMg',
            page: page,
          },
        });
        setImages(prevImages => [...prevImages, ...response.data]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching images:', error);
        setError(true);
        setLoading(false);
      }
    };

    fetchImages();
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      {loading ? (
        <CustomLoader />
      ) : error ? (
        <ErrorMessage />
      ) : (
        <>
          <ImageGallery images={images} openModal={openModal} />
          <LoadMoreBtn onLoadMore={handleLoadMore} hasMoreImages={images.length > 0} />
          <ImageModal
            isOpen={selectedImage !== null}
            onRequestClose={closeModal}
            imageUrl={selectedImage}
            imageAlt="Large Image"
          />
        </>
      )}
    </div>
  );
}

export default App;

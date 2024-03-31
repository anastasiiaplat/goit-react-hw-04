import React, { useState, useEffect } from 'react';

import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Modal from 'react-modal';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { requestImages } from './api'; 

Modal.setAppElement('#root');

function App() {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await requestImages({
          client_id: 'xogthnLMHTngN01rgyyuntTTupu7L3Oqm5gTLKufwMg',
          page: page,
        });
        setImages(prevImages => (prevImages ? [...prevImages, ...response.data] : response.data));
      } catch (error) {
        console.error('Error fetching images:', error);
        setError(true);
      } finally {
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
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage />
      ) : (
        <>
          {images && images.length > 0 && (
            <ImageGallery images={images} openModal={openModal} />
          )}
          <LoadMoreBtn onLoadMore={handleLoadMore} hasMoreImages={images && images.length > 0} />
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Large Image Modal"
            className="modal"
            overlayClassName="overlay"
          >
            <ImageModal imageUrl={selectedImage} onClose={closeModal} />
          </Modal>
        </>
      )}
    </div>
  );
}

export default App;

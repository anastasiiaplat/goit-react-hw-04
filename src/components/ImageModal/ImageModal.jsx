
import Modal from 'react-modal';

const ImageModal = ({ modalIsOpen, closeModal, imageUrl, imageAlt }) => {
  return (


    <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Large Image Modal"
            className="modal"
            overlayClassName="overlay"
          >
    
      <img src={imageUrl} alt={imageAlt} style={{ width: '100%', height: 'auto' }} />
    </Modal>
  );
};

export default ImageModal;

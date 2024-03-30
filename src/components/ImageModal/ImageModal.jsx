
import Modal from 'react-modal';

const ImageModal = ({ isOpen, onRequestClose, imageUrl, imageAlt }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          border: 'none',
          borderRadius: '8px',
          maxWidth: '80%',
          maxHeight: '80%',
          overflow: 'hidden',
        },
      }}
    >
      <img src={imageUrl} alt={imageAlt} style={{ width: '100%', height: 'auto' }} />
    </Modal>
  );
};

export default ImageModal;

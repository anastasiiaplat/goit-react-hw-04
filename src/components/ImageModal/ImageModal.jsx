import Modal from "react-modal";


Modal.setAppElement("#root");

const ImageModal = ({
  closeModal,
  modalIsOpen,
  imageSrc = "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg",
  imageAltDescription = "Regular gallery image",
  
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
    >
      {" "}
      
        <div>
          <img src={imageSrc} alt={imageAltDescription} />
        
      </div>
    </Modal>
  );
};

export default ImageModal;
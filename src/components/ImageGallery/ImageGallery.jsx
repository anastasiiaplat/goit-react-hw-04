

const ImageGallery = ({ images }) => {
  
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <ul>
      {images.map((image, index) => (
        <li key={index}>
          <div>
            <img src={image.urls.regular} alt={image.description || 'Image'} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

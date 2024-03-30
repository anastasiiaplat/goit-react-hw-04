

const ImageCard = ({ image }) => {
  return (
    <div>
      <img src={image.urls.regular} alt={image.description || 'Image'} />
    </div>
  );
};

export default ImageCard;

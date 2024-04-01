

const ImageCard = ({ img, onImageClick }) => {
  const imageData = {
    imageSrc: img.urls.regular,
    imageAltDescription: img.alt_description,
    imageDescription: img.description,
   
  };

  return (
   
      <img
        onClick={() => onImageClick(imageData)}
        src={img.urls.small}
        alt={img.alt_description}
        width={310}
        height={200}
      />
      
  
  );
};

export default ImageCard;
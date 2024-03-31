import ImageCard from "../ImageCard/ImageCard";


const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul>
      {images.map((img) => {
        return (
          <li key={img.id}>
            <ImageCard img={img} onImageClick={onImageClick} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
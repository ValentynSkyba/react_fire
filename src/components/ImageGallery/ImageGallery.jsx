import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGellery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <ul className={s.imageGallery}>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </ul>
  );
};

export default ImageGallery;

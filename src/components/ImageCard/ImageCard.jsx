import s from "./ImageCard.module.css";

const ImageCard = ({ image, openModal }) => {
  const { alt_description, urls, description = "No description" } = image;
  return (
    <li className={s.imageCard}>
      <img
        className={s.img}
        src={urls.regular}
        alt={alt_description}
        onClick={() => {
          openModal(image.urls.full);
        }}
      />
      <h3 className={s.imageCard__description}>{description}</h3>
    </li>
  );
};

export default ImageCard;

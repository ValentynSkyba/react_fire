import s from "./ImageCard.module.css";

const ImageCard = ({ image }) => {
  console.log(image);
  const { alt_description, urls, description = "No description" } = image;
  return (
    <li className={s.imageCard}>
      <img className={s.img} src={urls.regular} alt={alt_description} />
      <h3 className={s.imageCard__description}>{description}</h3>
    </li>
  );
};

export default ImageCard;

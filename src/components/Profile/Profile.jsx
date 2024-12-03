import s from "./Profile.module.css";
import PropTypes from "prop-types";

const Profile = (props) => {
  // console.log(props);
  const { name, tag, location, image, stats } = props;
  return (
    <div className={s.profile}>
      <div className={s.container}>
        <img className={s.image} src={image} alt="User avatar" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.stats_li}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={s.stats_li}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={s.stats_li}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.protoTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;

import s from "./Profile.module.css";
import PropTypes from "prop-types";

const Profile = (props) => {
  console.log(props);
  const { name, tag, location, image, stats } = props;
  return (
    <div className={s.profile}>
      <div className={s.container}>
        <img src={image} alt="User avatar" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

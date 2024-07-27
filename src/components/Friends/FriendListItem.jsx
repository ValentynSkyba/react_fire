import s from "./FriendListItem.module.css";
import clsx from "clsx";
import PropTypes from "prop-types";

const FriendListItem = (props) => {
  // console.log(props);
  const { src, status, name } = props;

  return (
    <li>
      <img src={src} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={clsx(props.status ? s.green : s.red)}>
        {status ? "Online" : "Offline"}
      </p>
    </li>
  );
};

FriendListItem.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.bool,
};

export default FriendListItem;

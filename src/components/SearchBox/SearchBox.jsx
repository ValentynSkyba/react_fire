import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeSearchStr } from "../../redux/filtersSlice";

const SearchBox = ({ filter }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        value={filter}
        onChange={(e) => dispatch(changeSearchStr(e.target.value))}
        className={s.input}
        type="text"
        placeholder="Search contact"
      />
      <button
        className={s.button}
        onClick={() => dispatch(changeSearchStr(""))}
      >
        Reset
      </button>
    </div>
  );
};

export default SearchBox;

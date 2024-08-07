import React from "react";
import s from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilter }) => {
  return (
    <div>
      <input
        value={filter}
        onChange={(e) => onFilter(e.target.value)}
        className={s.input}
        type="text"
        placeholder="Search contact"
      />
      <button className={s.button} onClick={() => onFilter("")}>
        Reset
      </button>
    </div>
  );
};

export default SearchBox;

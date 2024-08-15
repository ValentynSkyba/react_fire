import { Field, Formik } from "formik";
import s from "./SearchBar.module.css";

import React from "react";

const SearchBar = () => {
  return (
    <div>
      <header>
        <form>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            className={s.input}
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
      ;
    </div>
  );
};

export default SearchBar;

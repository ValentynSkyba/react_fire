import { Field, Form, Formik } from "formik";
import s from "./SearchBar.module.css";

import React from "react";

const SearchBar = ({ setQuery }) => {
  const handleSubmit = (data, options) => {
    setQuery(data.query);
    options.resetForm();
  };

  const initialValues = {
    query: "",
  };

  return (
    <header>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            type="text"
            name="query"
            className={s.input}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
          <button>Reset</button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;

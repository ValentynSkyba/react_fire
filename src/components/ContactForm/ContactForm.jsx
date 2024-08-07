import React from "react";
import s from "./ContactForm.module.css";
import { Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";

const ContactForm = ({ addContact }) => {
  const initialValues = {
    name: "",
    phone: "",
  };
  const handleSubmit = (data, options) => {
    addContact({ ...data, id: nanoid() });
    options.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label className={s.label} htmlFor="name">
          Contact Name:
          <Field type="text" name="name" className={s.input}></Field>
        </label>

        <label className={s.label} htmlFor="number">
          Phone:
          <Field type="text" name="number" className={s.input}></Field>
        </label>

        <button type="submit" className={s.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

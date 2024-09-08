import s from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yap from "yup";
import { addNewContact } from "../../redux/contactsSlice";

const ContactForm = () => {
  const addSchema = Yap.object().shape({
    name: Yap.string()
      .min(3, "Too short")
      .max(20, "Too long")
      .required("Required"),
    number: Yap.number("Must be a number").required("Required"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  const dispatch = useDispatch();

  const handleSubmit = (data, options) => {
    dispatch(addNewContact(data));
    options.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={addSchema}
    >
      <Form className={s.form}>
        <label className={s.label} htmlFor="name">
          Contact Name:
          <Field type="text" name="name" className={s.input}></Field>
          <ErrorMessage component="span" name="name" className={s.error} />
        </label>

        <label className={s.label} htmlFor="number">
          Phone:
          <Field type="text" name="number" className={s.input}></Field>
          <ErrorMessage component="span" name="number" className={s.error} />
        </label>

        <button type="submit" className={s.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

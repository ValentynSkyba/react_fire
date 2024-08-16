import s from "./ErrorMassege.module.css";

const ErrorMassege = () => {
  return (
    <div>
      <p className={s.error}>Something went wrong. Please try again later.</p>
    </div>
  );
};

export default ErrorMassege;

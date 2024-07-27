import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => {
  const { amount, currency, type, id } = transactions;
  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr>
          <th className={s.thtd}>Type</th>
          <th className={s.thtd}>Amount</th>
          <th className={s.thtd}>Currency</th>
        </tr>
      </thead>

      {transactions.map((el) => {
        return (
          <tbody key={el.id} className={s.tbody}>
            <tr>
              <td className={s.thtd}>{el.type}</td>
              <td className={s.thtd}>{el.amount}</td>
              <td className={s.thtd}>{el.currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default TransactionHistory;

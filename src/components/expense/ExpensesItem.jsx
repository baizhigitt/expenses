// ExpensesItem'ге  пропс берген компонента бул Expenses
import expenseStyle from "./ExpenseStyle.module.css";

export const ExpensesItem = (props) => {
  const { trata, price, date } = props;
  const { expenseMainItem, itemPrice, itemText } = expenseStyle;
  return (
    <div className={expenseMainItem}>
      <ExpenseItemDate date={date} />

      <div className={itemText}>
        <h4>{trata}</h4>
      </div>
      <div className={itemPrice}>
        <p>$ {price}</p>
      </div>
    </div>
  );
};

const ExpenseItemDate = (props) => {
  const { date } = props;

  const year = date.getFullYear();
  const month = date.toLocaleDateString("kg-RU", { month: "long" });
  const day = date.getDate();
  const { expenseItem, expenseDate } = expenseStyle;

  return (
    <div className={expenseItem}>
      <div className={expenseDate}>
        <p>{month}</p>
        <p>{year}</p>
        <p>{day}</p>
      </div>
    </div>
  );
};

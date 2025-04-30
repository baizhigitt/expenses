import { ExpensesItem } from "./ExpensesItem";
// Expenses'ге пропс  берген компонета бул App

export const Expenses = (props) => {
  const { expenses } = props;
  console.log("expenses");

  return (
    <div>
      {expenses.map((item) => {
        return <ExpensesItem key={item.id} {...item} />;
      })}
    </div>
  );
};

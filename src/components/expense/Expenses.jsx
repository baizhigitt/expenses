import { ExpensesItem } from "./ExpensesItem";

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

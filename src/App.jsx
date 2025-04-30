import { Expenses } from "./components/expense/Expenses";
import { ExpenseForm } from "./components/expense-form/ExpenseForm";
import { useState } from "react";

const RASHODY = [
  { id: "f1", trata: "iphone 16 pro max", price: 2000, date: new Date() },
  { id: "f2", trata: "Toyota camry 3.5 ", price: 70000, date: new Date() },
];

function App() {
  const [expenses, setExpenses] = useState([]);

  const perevod = (razhod) => {
    // // const newExpenses = [...expenses];
    // // newExpenses.push(razhod);
    // setExpenses(newExpenses);
    // const newExpenses = [...expenses, razhod];
    // setExpenses(newExpenses);

    setExpenses((prev) => [...prev, razhod]);
  };

  console.log("work");

  const [isOpen, setIsOpen] = useState(false);
  const [counter, setCounter] = useState(0);

  const expenseFormHandler = () => {
    setIsOpen((prev) => !prev);
  };
  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <div>
        <button className="button" onClick={expenseFormHandler}>
          Добавить новый расходы
        </button>
        <button onClick={increment} className="button">
          COUNTER {counter}
        </button>

        {isOpen ? (
          <ExpenseForm
            btnText="Отмена"
            addExpense="Добавить расходы"
            onClose={expenseFormHandler}
            onPerevod={perevod}
          />
        ) : null}
      </div>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

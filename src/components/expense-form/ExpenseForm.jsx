import { useState } from "react";

import styles from "./Form.module.css";

const {
  text,
  formMain,
  innerContainer,
  labelText,
  buttonText,
  btnExpense,
  buttonDiv,
} = styles;

const ExpenseTextField = ({ label, type, value, onChange }) => {
  return (
    <div>
      <div className={innerContainer}>
        <label className={labelText} htmlFor={label}>
          {label}
        </label>
        <input type={type} value={value} onChange={onChange} className={text} />
      </div>
    </div>
  );
};

export const ExpenseForm = ({ btnText, addExpense, onClose, onPerevod }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const titleValueHandler = (event) => {
    setTitle(event.target.value);
  };

  const priceValueHandler = (event) => {
    setPrice(event.target.value);
  };
  const dateValueHandler = (event) => {
    setDate(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newExpense = {
      trata: title,
      price: price,
      date: new Date(date),
      id: crypto.randomUUID(),
    };

    onPerevod(newExpense);
    setTitle("");
    setDate("");
    setPrice("");
  };

  return (
    <div>
      <form onSubmit={onSubmit} className={formMain}>
        <ExpenseTextField
          label="Заголовок"
          type="text"
          value={title}
          onChange={titleValueHandler}
        />
        <ExpenseTextField
          label="Цены"
          type="number"
          value={price}
          onChange={priceValueHandler}
        />
        <ExpenseTextField
          label="Датировать"
          type="date"
          value={date}
          onChange={dateValueHandler}
        />
        <div className={buttonDiv}>
          <button className={buttonText} onClick={onClose}>
            {btnText}
          </button>

          <button className={btnExpense} type="submit">
            {addExpense}
          </button>
        </div>
      </form>
    </div>
  );
};

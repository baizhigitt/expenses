import { useState } from "react";

import styled from "styled-components";

const ExpenseTextField = ({ label, type, value, onChange }) => {
  return (
    <div>
      <InnerContainer>
        <MyLabel htmlFor={label}>{label}</MyLabel>
        <MyInput type={type} value={value} onChange={onChange} />
      </InnerContainer>
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
      <Form onSubmit={onSubmit}>
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
        <ButtonDiv>
          <MyButton onClick={onClose}>{btnText}</MyButton>

          <ExpenseButton>{addExpense}</ExpenseButton>
        </ButtonDiv>
      </Form>
    </div>
  );
};

// styled-components

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const MyInput = styled.input`
  width: 340px;
  height: 39px;
  border-radius: 8px;
  border: none;
  padding-left: 18px;
  padding-right: 18px;

  &:focus {
    width: 335px;
    height: 39px;
    border: 1px solid #3f3f3f;
  }
`;

const MyLabel = styled.label`
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 10px;
`;

const Form = styled.form`
  display: flex;

  flex-wrap: wrap;

  border-radius: 12px;
  gap: 15px;
  width: 780px;
  height: 287px;
  background: #ad9be9;
  padding-left: 40px;
  align-items: center;
  padding-right: 20px;
  padding-bottom: 150px;
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 10px;
  margin-right: 40px;
  margin-top: 100px;
`;

const MyButton = styled.button`
  width: 97px;
  height: 51px;
  background: #4a026b;
  border-radius: 10px;
  color: #fff;
  font-size: large;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const ExpenseButton = styled.button`
  background: #4a026b;
  width: 186px;
  height: 51px;
  border-radius: 10px;
  color: #fff;
  font-size: large;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

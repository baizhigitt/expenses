import styled from "styled-components";

export const ExpensesItem = (props) => {
  const { trata, price, date } = props;

  return (
    <ExpensesMainItem>
      <ExpenseItemDate date={date} />

      <ItemText>
        <h4>{trata}</h4>
      </ItemText>
      <ItemPrice>
        <p>$ {price}</p>
      </ItemPrice>
    </ExpensesMainItem>
  );
};

const ExpenseItemDate = (props) => {
  const { date } = props;

  const year = date.getFullYear();
  const month = date.toLocaleDateString("kg-RU", { month: "long" });
  const day = date.getDate();

  return (
    <ExpenseItem>
      <ExpenseDate>
        <p>{month}</p>
        <p>{year}</p>
        <p>{day}</p>
      </ExpenseDate>
    </ExpenseItem>
  );
};

// styled.components

const ItemText = styled.div`
  margin-top: 15px;
`;

const ExpensesMainItem = styled.div`
  width: 748px;
  height: 104px;
  background: #4b4b4b;
  border-radius: 12px;
  display: flex;
  color: #fff;
  justify-content: space-around;
  font-family: Arial, Helvetica, sans-serif;
  font-size: medium;
  padding-left: 20px;
  margin: 20px 0;
`;

const ItemPrice = styled.div`
  background: #40005d;
  height: 44px;
  width: 124px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  text-align: center;
  margin-top: 20px;
  margin-left: 150px;
`;

const ExpenseItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ExpenseDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2a2a2a;
  border: 1px solid #fff;
  border-radius: 12px;
  width: 80px;
  height: 80px;
  color: #fff;
  font-weight: bold;
  font-size: 0.85rem;
  padding: 8px;
`;

import React, { useState } from "react";
import styled from "styled-components";
import AddTransactionView from "./AddTransactionView";
import PropTypes from 'prop-types';

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  align-items: center;
  font-size: 16px;
  width: 100%;
`;

const ExpenseContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 20px;
  width: 100%;
  justify-content: space-around;
`;

const ExpenseBox = styled.div`
  border-radius: 4px;
  border: 1px solid #e6e8e9;
  padding: 15px 20px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 135px;
  background-color: ${(props) => (props.isIncome ? "#e0f7fa" : "#ffebee")};
  & span {
    color: ${(props) => (props.isIncome ? "green" : "red")};
    font-weight: bold;
    font-size: 20px;
  }
`;

const BalanceBox = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: bold;
  margin-bottom: 10px;
  & span {
    color: #0d1d2c;
    opacity: 80%;
    font-weight: bold;
    font-size: 20px;
  }
`;

const AddTransactionButton = styled.button`
  font-size: 15px;
  background: #0d1d2c;
  display: flex;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  flex-direction: row;
  border-radius: 4px;
  font-weight: bold;
  border: none;
  &:hover {
    background: #092035;
  }
`;

// OverViewComponent component
const OverViewComponent = ({ income, expense, addTransaction }) => {
  const [isAddTxnVisible, setAddTxnVisible] = useState(false);

  return (
    <Container>
      <BalanceBox>
        <span>Balance: ₹{income - expense}</span>
        <AddTransactionButton onClick={() => setAddTxnVisible((prev) => !prev)}>
          {isAddTxnVisible ? "CANCEL" : "ADD"}
        </AddTransactionButton>
      </BalanceBox>
      <AddTransactionView
        isVisible={isAddTxnVisible}
        addTransaction={(payload) => {
          addTransaction(payload);
          setAddTxnVisible(false);
        }}
      />
      <ExpenseContainer>
        <ExpenseBox>
          Expense <span>₹{expense}</span>
        </ExpenseBox>
        <ExpenseBox isIncome>
          Income <span>₹{income}</span>
        </ExpenseBox>
      </ExpenseContainer>
    </Container>
  );
};

OverViewComponent.propTypes = {
  income: PropTypes.number.isRequired,
  expense: PropTypes.number.isRequired,
  addTransaction: PropTypes.func.isRequired,
};

export default OverViewComponent;

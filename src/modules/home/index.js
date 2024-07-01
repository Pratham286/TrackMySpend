import React, { useState } from "react";
import styled from "styled-components";
import OverViewComponent from "./OverViewComponent";
import TransactionsComponent from "./TransactionsComponent";
import PropTypes from 'prop-types';

// Styled components
const Container = styled.div`
  background-color: white; /* Match background color */
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  padding: 10px 22px;
  font-size: 18px;
  width: 360px;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  border: 1px solid #ddd; /* Match border */
  border-radius: 4px; /* Match border radius */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Add shadow */
`;

// HomeComponent component
const HomeComponent = () => {
  const [transactions, setTransactions] = useState([]);

  const calculateBalance = () => {
    let exp = 0;
    let inc = 0;
    transactions.forEach(({ type, amount }) =>
      type === "EXPENSE" ? (exp += amount) : (inc += amount)
    );
    return { expense: exp, income: inc };
  };

  const addTransaction = (payload) => {
    setTransactions((prevTransactions) => [...prevTransactions, payload]);
  };

  const deleteTransaction = (id) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== id)
    );
  };

  const editTransaction = (id, updatedData) => {
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction.id === id
          ? { ...transaction, ...updatedData }
          : transaction
      )
    );
  };

  const { expense, income } = calculateBalance();

  return (
    <Container>
      <OverViewComponent
        expense={expense}
        income={income}
        addTransaction={addTransaction}
      />
      <TransactionsComponent
        transactions={transactions}
        onDelete={deleteTransaction}
        onEdit={editTransaction}
      />
    </Container>
  );
};

HomeComponent.propTypes = {
  transactions: PropTypes.array,
  setTransactions: PropTypes.func,
};

export default HomeComponent;

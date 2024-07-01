
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: white; /* Match the background color */
  border: 1px solid #ddd; /* Match the border */
  border-radius: 4px; /* Match the border radius */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  width: 80%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 10px;
  margin: 10px;
  width: 80%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const AddTransactionView = ({ addTransaction }) => {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("INCOME");
  const [description, setDescription] = useState("");

  const handleAddTransaction = () => {
    addTransaction({
      id: Math.floor(Math.random() * 100000),
      amount: parseFloat(amount),
      type,
      description,
    });
    setAmount("");
    setDescription("");
  };

  return (
    <Container>
      <h2>Add Transaction</h2>
      <Select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="INCOME">Income</option>
        <option value="EXPENSE">Expense</option>
      </Select>
      <Input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <Input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <Button onClick={handleAddTransaction}>Add Transaction</Button>
    </Container>
  );
};

export default AddTransactionView;

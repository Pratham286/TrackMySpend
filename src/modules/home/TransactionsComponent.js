import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: white; /* Match background color */
  border: 1px solid #ddd; /* Match border */
  border-radius: 4px; /* Match border radius */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Add shadow */
`;

const TransactionList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

const TransactionItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

const TransactionDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

const TransactionDescription = styled.div`
  font-size: 14px;
  color: #777;
`;

const TransactionAmount = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Button = styled.button`
  background-color: ${(props) => props.color || 'red'};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 5px 10px;
  margin-left: 5px;
  &:hover {
    background-color: ${(props) => props.hoverColor || 'darkred'};
  }
`;

const EditFormContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const TransactionsComponent = ({ transactions, onDelete, onEdit }) => {
  const [editId, setEditId] = useState(null);
  const [editAmount, setEditAmount] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editType, setEditType] = useState("INCOME");

  const handleEdit = (transaction) => {
    setEditId(transaction.id);
    setEditAmount(transaction.amount);
    setEditDescription(transaction.description);
    setEditType(transaction.type);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(editId, { amount: parseFloat(editAmount), description: editDescription, type: editType });
    setEditId(null);
    setEditAmount("");
    setEditDescription("");
    setEditType("INCOME");
  };

  return (
    <Container>
      <h2>Transactions</h2>
      <TransactionList>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id}>
            <TransactionDetail>
              <TransactionDescription>
                {transaction.description}
              </TransactionDescription>
              <TransactionAmount>
                {transaction.type === "INCOME" ? "+" : "-"}₹{transaction.amount}
              </TransactionAmount>
            </TransactionDetail>
            <div>
              <Button onClick={() => handleEdit(transaction)} color="blue" hoverColor="darkblue">
                Edit
              </Button>
              <Button onClick={() => onDelete(transaction.id)}>
                Delete
              </Button>
            </div>
          </TransactionItem>
        ))}
      </TransactionList>
      {editId && (
        <>
          <Overlay onClick={() => setEditId(null)} />
          <EditFormContainer>
            <EditForm onSubmit={handleEditSubmit}>
              <Select value={editType} onChange={(e) => setEditType(e.target.value)}>
                <option value="INCOME">Income</option>
                <option value="EXPENSE">Expense</option>
              </Select>
              <Input
                type="number"
                value={editAmount}
                onChange={(e) => setEditAmount(e.target.value)}
                placeholder="Amount"
              />
              <Input
                type="text"
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                placeholder="Description"
              />
              <Button type="submit" color="#4caf50" hoverColor="#45a049">
                Save
              </Button>
            </EditForm>
          </EditFormContainer>
        </>
      )}
    </Container>
  );
};

export default TransactionsComponent;

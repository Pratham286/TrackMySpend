export const calculateBalance = (transactions) => {
  let exp = 0;
  let inc = 0;
  transactions.forEach((payload) =>
    payload.type === "EXPENSE" ? (exp += payload.amount) : (inc += payload.amount)
  );
  return { expense: exp, income: inc };
};

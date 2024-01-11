import React, { useContext } from "react"
import { GlobalContext } from "../Context Api/GlobalState";
import { FaRupeeSign } from "react-icons/fa";

function Balance() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc,item) => (acc += item), 0).toFixed(2);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>{<FaRupeeSign />}{total}</h1>
    </div>
  );
}

export default Balance;
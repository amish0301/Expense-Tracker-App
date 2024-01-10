import React from "react"
import { FaRupeeSign } from "react-icons/fa";

function Balance() {
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>{<FaRupeeSign />}0.00</h1>
    </div>
  );
}

export default Balance;
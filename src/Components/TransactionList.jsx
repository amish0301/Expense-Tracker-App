import React from "react";
import { FaRupeeSign } from "react-icons/fa";

function TransactionList() {
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        <li className="minus">
          Cash <span>-{<FaRupeeSign />}400</span>
          <button className="delete-btn">x</button>
        </li>
      </ul>
    </div>
  );
}

export default TransactionList;

import React from "react";
import { FaRupeeSign } from "react-icons/fa";

function IncomeExpenses() {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">
          +{<FaRupeeSign />}0.00
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">
          -{<FaRupeeSign />}0.00
        </p>
      </div>
    </div>
  );
}

export default IncomeExpenses;

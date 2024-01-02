import React from "react";
import categories from "../categories";

interface Props {
  onFilter: (category: string) => void;
}
const ExpenseFilter = ({ onFilter }: Props) => {
  return (
    <>
      <select
        className="form-select mb-3"
        onChange={(e) => onFilter(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
};

export default ExpenseFilter;

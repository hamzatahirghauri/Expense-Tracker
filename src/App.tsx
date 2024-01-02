import React, { useState } from "react";
import ExpenseList from "./expenseTracker/components/ExpenseList";
import ExpenseFilter from "./expenseTracker/components/ExpenseFilter";
import ExpenseForm from "./expenseTracker/components/ExpenseForm";
import categories from "./expenseTracker/categories";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Milk",
      amount: 10,
      category: "Groceries",
    },
    {
      id: 2,
      description: "Eggs",
      amount: 20,
      category: "Groceries",
    },
    {
      id: 3,
      description: "Bread",
      amount: 5,
      category: "Groceries",
    },
  ]);
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <>
      <ExpenseForm
        onSubmit={(expense) =>
          setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
        }
      />
      <ExpenseFilter onFilter={(category) => setSelectedCategory(category)} />
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
};

export default App;

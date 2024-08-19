"use client";
import React, { FormEvent, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";

const FinanceForm = () => {
  const [income, setIncome] = useState("");
  const [budget, setBudget] = useState("");

  const numericIncome = parseInt(income);
  const numericBudget = parseInt(budget);
  const numericSavings = numericIncome - numericBudget;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/finance", {
        income: numericIncome,
        budget: numericBudget,
      });
      setIncome("");
      setBudget("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-5 bg-white rounded-lg">
      <h1 className="text-lg font-medium mb-2">Finance Details</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Label>Income</Label>
        <Input
          value={income}
          type="number"
          onChange={(e) => setIncome(e.target.value)}
          required
        />
        <Label>Budget</Label>
        <Input
          value={budget}
          type="number"
          onChange={(e) => setBudget(e.target.value)}
          required
        />
        <Label>Your Savings</Label>
        <h1>{numericSavings || "0"}</h1>
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

export default FinanceForm;

"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { useEffect, useState } from "react";
import { Trash } from "lucide-react";
import EditModal from "@/components/utils/EditModal";

interface ExpensesProps {
  _id: string;
  itemName: string;
  amount: number;
  category: string;
  priority: string;
  createdAt: Date;
}

const page = () => {
  const [expenses, setExpenses] = useState<ExpensesProps[]>([]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const response = await axios.get("/api/v1/expense");
        setExpenses(response.data.expenses);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllData();
  }, []);

  const onEdit = (editedExpense: ExpensesProps) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense._id === editedExpense._id ? editedExpense : expense
      )
    );
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await axios.delete(`/api/v1/expense/${id}`);
      setExpenses((prevExpenses) =>
        prevExpenses.filter((expense) => expense._id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="w-full">
      <div className="mb-3 flex flex-col justify-center items-start">
        <h1 className="text-lg font-medium">Over Budget</h1>
        <p className="text-muted-foreground">
          You can delete or edit the expense with the low prioriy to adjust your
          budget.
        </p>
      </div>
      <Table className="border w-full bg-white">
        <TableHeader>
          <TableRow>
            <TableHead>Item Name</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expenses.length > 0 ? (
            expenses.map((expense) => (
              <TableRow
                key={expense._id}
                className={`${
                  expense.priority === "low" ? "bg-red-500 text-white" : ""
                }`}
              >
                <TableCell>{expense.itemName}</TableCell>
                <TableCell>₹{expense.amount}</TableCell>
                <TableCell>{expense.category}</TableCell>
                <TableCell>
                  <p
                    className={`font-medium px-3 py-1 rounded-full text-white w-fit ${
                      expense.priority === "low"
                        ? "bg-green-500"
                        : expense.priority === "mid"
                        ? "bg-yellow-400"
                        : "bg-red-600"
                    }`}
                  >
                    {expense.priority}
                  </p>
                </TableCell>
                <TableCell>
                  {new Date(expense.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell className="flex justify-center items-center gap-2">
                  <Button size="icon" onClick={() => handleDelete(expense._id)}>
                    <Trash width={16} height={16} />
                  </Button>
                  <EditModal
                    _id={expense._id}
                    prevItemName={expense.itemName}
                    prevAmount={expense.amount.toString()}
                    prevCategory={expense.category}
                    prevPriority={expense.priority}
                    onEdit={onEdit}
                  />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell className="font-medium">No Expenses Found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </section>
  );
};

export default page;

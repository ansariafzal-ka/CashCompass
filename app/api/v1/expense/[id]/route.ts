import { connectDb } from "@/utils/database";
import { Expense } from "@/models/expense";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  id: string;
}

export const DELETE = async (
  request: NextRequest,
  { params }: { params: Props }
) => {
  try {
    await connectDb();
    const expense = await Expense.findById(params.id);
    if (!expense)
      return new NextResponse("No expense found with this id", { status: 400 });

    const deletedExpense = await Expense.findByIdAndDelete(params.id);

    return new NextResponse(
      JSON.stringify({
        message: "Expense deleted successfully",
        deletedExpense: deletedExpense,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log("Error deleting this expense", error);
    return new NextResponse("Error deleting this expense", { status: 500 });
  }
};
export const PUT = async (
  request: NextRequest,
  { params }: { params: Props }
) => {
  try {
    const { itemName, amount, category, priority } = await request.json();
    if (!itemName || !amount || !category || !priority)
      return new NextResponse("Some fields are missing", { status: 400 });

    const updatedExpense = await Expense.findByIdAndUpdate(
      params.id,
      {
        itemName: itemName,
        amount: amount,
        category: category,
        priority: priority,
      },
      { new: true }
    );
    return new NextResponse(
      JSON.stringify({
        message: "Expense updated succesfully",
        updatedExpense: updatedExpense,
      })
    );
  } catch (error) {
    console.log("Error updating expense : ", error);
    return new NextResponse("Error updating expense", { status: 500 });
  }
};

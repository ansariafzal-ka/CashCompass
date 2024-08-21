import { connectDb } from "@/utils/database";
import { Expense } from "@/models/expense";
import { Finance } from "@/models/finance";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    await connectDb();
    const expenses = await Expense.find().sort({ createdAt: -1 });
    return new NextResponse(
      JSON.stringify({
        expenses: expenses,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log("Error fetching all expenses : ", error);
    return new NextResponse("Error fetching all expenses", { status: 500 });
  }
};

export const POST = async (request: NextRequest) => {
  try {
    const { itemName, amount, category, priority } = await request.json();
    if (!itemName || !amount)
      return new NextResponse("Some fields are missing", { status: 400 });

    const finance = await Finance.findOne();

    if (!finance)
      return new NextResponse(
        "Finance details are not set, kindly first set the finance details",
        {
          status: 404,
        }
      );

    const totalExpenses = await Expense.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$amount" },
        },
      },
    ]);

    const currentTotalExpenses = totalExpenses[0]?.total || 0;
    const newTotalExpenses = currentTotalExpenses + amount;

    const isOverBudget = newTotalExpenses > finance.budget;

    const newExpense = await Expense.create({
      itemName: itemName,
      amount: amount,
      category: category,
      priority: priority,
      isOverBudget: isOverBudget,
    });
    return new NextResponse(
      JSON.stringify({
        message: "Expense created succesfully",
        newExpense: newExpense,
      })
    );
  } catch (error) {
    console.log("Error creating new expense : ", error);
    return new NextResponse("Error creating expense", { status: 500 });
  }
};

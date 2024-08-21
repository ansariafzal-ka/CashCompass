import { connectDb } from "@/utils/database";
import { Finance } from "@/models/finance";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    await connectDb();
    const finance = await Finance.find();
    return new NextResponse(JSON.stringify({ finance: finance }));
  } catch (error) {
    console.log("Error fetching finance : ", error);
    return new NextResponse("Error fetching finance", { status: 500 });
  }
};

export const POST = async (request: NextRequest) => {
  try {
    await connectDb();
    const { income, budget } = await request.json();

    const calculatedSavings = income - budget;

    if (calculatedSavings < 0)
      return new NextResponse("Savings can't be negative", { status: 400 });

    let finance = await Finance.findOne();

    if (finance) {
      finance.income = income;
      finance.budget = budget;
      finance.savings = calculatedSavings;
      await finance.save();
    } else {
      finance = new Finance({
        income: income || 0,
        budget: budget || 0,
        savings: calculatedSavings || 0,
      });
      await finance.save();
    }

    return new NextResponse(
      JSON.stringify({
        message: "Finance created successfully",
        newFinance: finance,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log("Error creating finance : ", error);
    return new NextResponse("Error creating finance", { status: 500 });
  }
};

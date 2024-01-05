import { NextResponse } from "next/server";
import { prisma } from "@/utils/connect";
//FETCH ALL CATEGORIES
export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    console.log(error);
  }
};

export const POST = () => {
  return new NextResponse("Hello", { status: 200 });
};

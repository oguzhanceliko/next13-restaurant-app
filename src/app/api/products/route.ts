import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/connect";

//FETCH ALL PRODUTCS
export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);

  const cat = searchParams.get("cat"); //Params içerisinde gelen değerlerden cat'e eşit olanı alır.

  try {
    const products = await prisma.product.findMany({
      where: {
        ...(cat ? { catSlug: cat } : { isFeatured: true }), //25-40 arası tekrar bak
      },
    });
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.log(error);
  }
};

export const POST = () => {
  return new NextResponse("Hello", { status: 200 });
};

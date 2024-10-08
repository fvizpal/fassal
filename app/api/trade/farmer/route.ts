import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, quantity, expectedPrice } = await req.json();

    const user = await currentUser();

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const commodity = await db.commodity.create({
      data: {
        userId: user.id as string,
        name,
        expectedPrice,
        quantity,
        sold: false,
      }
    })

    return NextResponse.json(commodity)
  } catch (error) {
    console.log("[COMMODITY_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function POST(
  req: Request,
  { params }: { params: { commodityId: string } }
) {
  try {
    const { amount, comment } = await req.json();

    const user = await currentUser();
    const commodityId = params.commodityId;

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!commodityId) {
      return new NextResponse("Commodity ID missing", { status: 400 });
    }

    const commodity = await db.commodity.update({
      where: {
        id: commodityId,
      },
      data: {
        bids: {
          create: {
            userId: user?.id as string,
            amount,
            comment,
            accepted: false,
          }
        }
      }
    })

    return NextResponse.json(commodity);
  } catch (error) {
    console.log("[BIDS_POST]", error);
    return new NextResponse("Intrenal error", { status: 500 });
  }
}
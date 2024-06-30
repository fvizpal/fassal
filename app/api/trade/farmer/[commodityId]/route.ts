import { currentUser } from "@/lib/auth";
import { NextResponse } from "next/server";


export async function Patch(req: Request) {
  try {
    const { imageUrl, } = await req.json();
    const user = await currentUser();

    if (!user) return new NextResponse("Unauthorised", { status: 401 });



  } catch (error) {
    console.log("[PATCH_COMMO]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
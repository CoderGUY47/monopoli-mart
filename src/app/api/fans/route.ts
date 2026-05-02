import { NextResponse } from "next/server";
import fansData from "@/data/fans.json";

export async function GET() {
  return NextResponse.json(fansData);
}

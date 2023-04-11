import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const req = await request.json();
  console.log(req);
  return NextResponse.json({
    status: 200,
    body: req,
  });
}

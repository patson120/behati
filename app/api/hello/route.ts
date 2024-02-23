import { NextResponse } from "next/server";
import STATUS from '@/utils/status.code'


// Handles GET requests to /api/persons
export async function GET(request: Request) {
    // ...
    return NextResponse.json({ message: "Hello World" }, { status: STATUS.BAD_REQUEST });
  }
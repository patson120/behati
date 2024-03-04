import { NextResponse } from "next/server";

import STATUS from "@/utils/status.code";


// Handles POST requests to /api/infos
export async function POST(request: Request) {
    
    const response = [
        {
            id: 1,
            name: "john",
        },
        {
            id: 2,
            name: "Marc",
        },
        {
            id: 3,
            name: "Ramses",
        }
    ]


    return NextResponse.json({ success: true, status: 201, result: response }, { status: STATUS.CREATED })

}
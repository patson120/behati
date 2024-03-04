import { NextResponse } from "next/server";

import STATUS from "@/utils/status.code";
import useContact from "@/hooks/useContact";


// Handles POST requests to /api/infos
export async function POST(request: Request) {


    const body = await request.json()
    const hookContact = useContact()
    const response = await hookContact.save(body)


    return NextResponse.json({ success: true, status: 201, result: response }, { status: STATUS.CREATED })

}
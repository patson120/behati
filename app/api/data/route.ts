

import { NextResponse } from "next/server"

import STATUS from '@/utils/status.code'


export async function POST(request: Request) {

    const response = [
        {
            id: 1,
            name: "John"
        },
        {
            id: 2,
            name: "Smith"
        }
    ]

    return NextResponse.json({ success: true, status: 201, result: response }, { status: STATUS.CREATED })

}
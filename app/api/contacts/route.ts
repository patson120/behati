

import useContact from "@/hooks/useContact";
import { NextResponse } from "next/server";
import STATUS from "@/utils/status.code"
import useSendMail from "@/hooks/useSendMail";


// Handles POST requests to /api/contacts
export async function POST(request: Request) {
    const body = await request.json()
    const hookContact = useContact()
    const response = await hookContact.save(body)
    const hookSenMail = useSendMail()
    const status = await hookSenMail.send(
        body.email,
        body.object,
        body.message,
        `${body.nom} ${body.prenom}`,
    )
    if (status === true) {
        return NextResponse.json({ success: true, status: STATUS.CREATED, result: response }, { status: STATUS.CREATED })
    }
    return NextResponse.json({ success: false, status: STATUS.BAD_REQUEST, result: response }, { status: STATUS.BAD_REQUEST })
}
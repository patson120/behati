import { NextResponse } from "next/server";
import STATUS from '@/utils/status.code'
import useContact from "@/hooks/useContact";
import useSendMail from "@/hooks/useSendMail";


// Handles GET requests to /api/contacts
export async function GET(request: Request) {
    // ...
    return NextResponse.json({ message: "Hello World" }, { status: STATUS.OK });
}


// Handles POST requests to /api/contacts
export async function POST(request: Request) {
    // ...
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
        console.log("Mail sent successfully");
        return NextResponse.json({ success: true, status: 201, result: response }, { status: STATUS.CREATED })
    }
    console.log("Unable to sent a Mail");
    return NextResponse.json({ success: false, status: STATUS.BAD_REQUEST, result: response }, { status: STATUS.BAD_REQUEST })

}
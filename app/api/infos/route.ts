import { NextResponse } from "next/server";

import STATUS from "@/utils/status.code";


// Handles POST requests to /api/infos
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


    // const body = await request.json()
    // const hookContact = useContact()
    // const response = await hookContact.save(body)

    
    // const hookSenMail = useSendMail()
    // const status = await hookSenMail.send(
    //     body.email,
    //     body.object,
    //     body.message,
    //     `${body.nom} ${body.prenom}`,
    // )
    
    // if (status === true) {
    //     console.log("Mail sent successfully");
    //     return NextResponse.json({ success: true, status: 201, result: response }, { status: STATUS.CREATED })
    // }
    // console.log("Unable to send mail");
    // return NextResponse.json({ success: false, status: STATUS.BAD_REQUEST, result: response }, { status: STATUS.BAD_REQUEST })

    return NextResponse.json({ success: true, status: 201, result: response }, { status: STATUS.CREATED })
}
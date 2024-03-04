

import CONSTANTS from '@/utils/constants'
import nodemailer from 'nodemailer'


const useSendMail = () => {

    const send = async (from: string, subject: string, message: string, username: string) => {
        try {
            await transporter.sendMail({
                from: from,
                to: 'claudkuate@gmail.com', // CONSTANTS.EMAIL_USERNAME,
                subject: subject,
                text: message,
                html: `
                    <html lang='en'>
                        <body>
                            <main>
                                <h1 style="font-weight: bold">Behati</h1> <br/>
                                <p style="font-weight: bold">Mr./Mme ${username} text to you.</p>
                                <p>${message} </p>
                            </main>
                        </body>
                    </html>
                `
            })
            return true
        } catch (error) {
            return false
        }
    }

    return { send }
}

export default useSendMail


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: CONSTANTS.EMAIL_USERNAME,
        pass: CONSTANTS.EMAIL_PASSWORD
    }
})


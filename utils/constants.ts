
const BASE_URL = process.env.NODE_ENV == "production" ? process.env.NEXT_PUBLIC_BASE_URL : "http://localhost:3000/api"
const EMAIL_USERNAME = process.env.NEXT_PUBLIC_EMAIL
const EMAIL_PASSWORD = process.env.NEXT_PUBLIC_EMAIL_PASS

export default {
    BASE_URL,
    EMAIL_USERNAME,
    EMAIL_PASSWORD
}
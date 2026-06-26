import dotenv from 'dotenv'

dotenv.config()

export const env = {
    username: process.env.API_USERNAME!,
    password: process.env.API_PASSWORD!
}
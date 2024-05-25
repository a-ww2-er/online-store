//ENVIRONMENT VARIABLES EXPORTS
import dotenv from 'dotenv'

dotenv.config({path:'.env'})

export const PORT = process.env.PORT || 5000
export const CORS_ORIGIN = process.env.CORS_ORIGIN
export const JWT_SECRET = process.env.JWT_SECRET!
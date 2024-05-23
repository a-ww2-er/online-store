import { PrismaClient } from "@prisma/client"
import { app } from "./server"
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 5000


export const prismaClient = new PrismaClient({
    log:["query"]
})


app.listen(port,()=> {
    console.log(`Server running on port ${port}`)
//connect db
})
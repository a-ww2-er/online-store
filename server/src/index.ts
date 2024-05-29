import { PrismaClient } from "@prisma/client";
import app from "./server";
import dotenv from "dotenv";
import { PORT } from "./variables";
import { registerSchema } from "./schema/users";

//SERVER INITIALIZATION FILE

//DATABASE INITIALIZATION
export const prismaClient = new PrismaClient({
  log: ["query"],
})
// .$extends({
//   query: {
//     //WHEN CREATING USER VALIDATE INPUTS WITH REGISTER SCHEMA
//     user: {
//       create({ args, query }) {
//         args.data = registerSchema.parse(args.data);
//         return query(args);
//       },
//     },
//   },
// });

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
  //connect db
});

import mongoose from "mongoose";

const user = process.env.DATABASE_USER || "root"
const pass = process.env.DATABASE_PASS || "password"

mongoose.connect(`mongodb://${user}:${pass}@localhost:27017/library`)

let db = mongoose.connection

export default db
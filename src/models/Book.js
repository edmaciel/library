import mongoose from "mongoose"

const bookSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, require: true},
        author: {type: String, require: true},
        company: {type: String, require: true},
    }
)

const books = mongoose.model('books', bookSchema)

export default books
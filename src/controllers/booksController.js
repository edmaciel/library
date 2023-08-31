import books from "../models/Book.js"


class BookController {
    static listBooks = async (req, res) => {
        try {
            const booksResponse = await books.find()
            res.status(200).json(booksResponse)
        } catch (err) {
            console.log(err)
            res.status(500).send('Error find books')
        }
    }

    static findBook = async (req, res) => {
        try {
            const _id = req.params.id
            console.log(_id)
            const booksResponse = await books.findById(_id)
            res.status(200).json(booksResponse)
        } catch (err) {
            console.log(err)
            res.status(500).send('Error find book')
        }
    }

    static createBook = async (req, res) => {
        try {
            let livro = new books(req.body)
            const booksResponse = await books.create(livro)
            res.status(200).json(booksResponse)
        } catch (err) {
            console.log(err)
            res.status(500).send('Error save book')
        }
    }

    static deleteBook = async (req, res) => {
        try {
            const id = req.params.id
            await books.deleteOne({_id: id})
            res.status(200).send('Successfully removed book')
        } catch (err) {
            console.log(err)
            res.status(500).send('Error remove book')
        }
    }

    static updateBook = async (req, res) => {
        try {
            const _id = req.params.id
            const booksResponse = await books.updateOne(_id)
            res.status(200).json(booksResponse)
        } catch (err) {
            console.log(err)
            res.status(500).send('Error update book')
        }
    }
}

export default BookController
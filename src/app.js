import express from "express";
import db from "./config/dbConnect.js"
import books from "./models/Book.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Error connect database'))
db.once("open", () => {
    console.log("Successfully connect database")
})

const app = express()
app.use(express.json())
routes(app)

app.post('/livros', async (req, res)=> {
    try {
        
    } catch (err) {
        console.log(err)
        res.status(500).send('Error to save book')
    }
    
    books.push(req.body)
    res.status(201).send('Successfully registered book')
} )

app.put('/livros/:id', (req, res) => {
    let index = findBook(req.params.id)
    books[index].name = req.body.name

    res.json(books)
})


export default app

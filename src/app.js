import express from "express";

const app = express()

const livros =[
    {id:1, "name":"Senhor dos aneis"},
    {id:2, "name":"A Cabana"}
]

app.get('/', (req, res) => {
    res.status(200).send('Project LIB')
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros)
})

export default app

import express from "express";
import BookController from "../controllers/booksController.js";

const router = express.Router()

router.get("/books", BookController.listBooks)
router.get("/books/:id", BookController.findBook)
router.post("/books", BookController.createBook)
router.delete("/books/:id", BookController.deleteBook)
router.put("/books/:id", BookController.updateBook)

export default router

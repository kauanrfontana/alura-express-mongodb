import express from "express";
import BookController from "../controllers/bookController.js";

const routes = express.Router();

routes.get("/books", BookController.getBooks);
routes.get("/books/:id", BookController.getBookById);
routes.post("/books", BookController.insertBook);
routes.patch("/books/:id", BookController.updateBook);
routes.delete("/books/:id", BookController.deleteBook);

export default routes;
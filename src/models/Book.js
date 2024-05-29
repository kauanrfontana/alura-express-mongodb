import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

const bookSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: [true, "O título do livro é obrigatório"] },
    editor: { type: String },
    price: { type: Number, required: [true, "O preço do livro é obrigatório"] },
    pages: { type: Number, required: [true, "A quantidade de páginas do livro é obrigatória"] },
    author: {type: authorSchema, required: [true, "O(a) autor(a) é obrigatório(a)"]},
  },
  { versionKey: false }
);

const book = mongoose.model("books", bookSchema);

export default book;

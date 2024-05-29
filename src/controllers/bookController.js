import book from "../models/Book.js";
import {author} from "../models/Author.js";
import mongoose from "mongoose";

class BookController {
  static async getBooks(req, res) {
    try {
      const queryParams = req.query;
      Object.entries(queryParams).forEach(([key, value]) => {
        queryParams[key] = {$regex: value, $options: "i"};
      });
      const listBooks = await book.find({...queryParams});
      res.status(200).json(listBooks);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  }

  static async getBookById(req, res, next) {
    try {
      const findedBook = await book.findById(req.params.id);
      if(findedBook !== null){
        res.status(200).json(findedBook);
      }else{
        res.status(400).json({message: "Id do livro não localizado."});
      }
    } catch (error) {
      next(error);
    }
  }

  static async insertBook(req, res, next) {
    try {
      const newBook = req.body;
      const findedAuthor = await author.findById(req.body.author);
      await book.create({...newBook, author: {...findedAuthor}});
      res.status(201).json({message: "Livro cadastrado com sucesso!"});
    } catch (error) {
      next(error);
    }
  }

  static async updateBook(req, res) {
    await book.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({message: "Livro alterado com sucesso!"});
  }

  static async deleteBook(req, res) {
    await book.findByIdAndDelete(req.params.id);
    res.status(200).json({message: "Livro deletado com sucesse!"});
  }
}

export default BookController;

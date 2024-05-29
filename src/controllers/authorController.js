import {author} from "../models/Author.js";

class AuthorController {
  static async getAuthors(req, res) {
    const listAuthors = await author.find({});
    res.status(200).json(listAuthors);
  }

  static async getAuthorById(req, res) {
    try {
      const listAuthors = await author.findById(req.params.id);
      res.status(200).json(listAuthors);
    } catch (error) {
      res.status(500).send(`error: ${error.message}`);
    }
  }

  static async insertAuthor(req, res) {
    try {
      const newAuthor = await author.create(req.body);
      res.status(201).json({message: "Autor cadastrado com sucesso!"});
    } catch (error) {
      if (error.name === "ValidationError") {
        res.status(400).json({ message: error.message });
      } else {
        res
          .status(500)
          .json({
            message: "Houve um erro inesperado, tente novamente mais tarde.",
          });
      }
    }
  }

  static async updateAuthor(req, res) {
    await author.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({message: "Autor alterado com sucesso!"});
  }

  static async deleteAuthor(req, res) {
    await author.findByIdAndDelete(req.params.id);
    res.status(200).json({message: "Autor deletado com sucesse!"});
  }
}

export default AuthorController;

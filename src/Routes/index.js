import express from "express";
import books from "./booksRoutes.js";
import authors from "./authorsRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Node.js Course"));
  
  app.use(express.json(), books, authors);

  app.route("*").get((req, res) => res.status(404).json({message: "Página não Encontrada"}));

};

export default routes;

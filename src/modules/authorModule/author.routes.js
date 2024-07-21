import { Router } from "express";
import authorControllers from "./author.controller.js";

const authorRouter = Router();

authorRouter
  .route("/")
  .get(authorControllers.getAllAuthors)
  .post(authorControllers.addAuthor);

authorRouter
  .route("/:id")
  .get(authorControllers.getAuthor)
  .put(authorControllers.updateAuthor)
  .delete(authorControllers.deleteAuthor);

export default authorRouter;

import { Router } from "express";
import bookControllers from "./book.controller.js";

const bookRouter = Router();

bookRouter
  .route("/")
  .get(bookControllers.getAllBooks)
  .post(bookControllers.addBook);
bookRouter
  .route("/:id")
  .get(bookControllers.getBook)
  .put(bookControllers.updateBook)
  .delete(bookControllers.deleteBook);

export default bookRouter;

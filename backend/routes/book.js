import { Router, request, response } from "express";
import { Book } from "../models/books.js";

const bookRouter = Router();
// add new book
bookRouter.post("/book", async (request, response, next) => {
  try {
    const { title, author, publishYear, price } = request.body;

    if (!title || !author || !publishYear || !price) {
      return response.status(400).send({
        msg: "Please provide all required fields (title, author, publishYear ,price)",
      });
    }

    const newBook = {
      title,
      author,
      publishYear,
      price,
    };

    const createdBook = await Book.create(newBook);

    return response.status(201).send(createdBook);
  } catch (error) {
    console.error(error);
    response.status(500).send({ msg: `Error: ${error.message}` });
  }
});
// get all book
bookRouter.get("/book", async (request, response) => {
  try {
    const books = await Book.find({});
    return response.status(200).send(books);
  } catch (error) {
    console.error(error);
    response.status(500).send({ msg: `Error: ${error.message}` });
  }
});
// get book by id :
bookRouter.get("/book/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findById(id);
    return response.status(200).send(book);
  } catch (error) {
    console.error(error);
    response.status(500).send({ msg: `Error: ${error.message}` });
  }
});
// updating book information :
bookRouter.put("/book/:id", async (request, response) => {
  try {
    const { title, author, publishYear, price } = request.body;
    const { id } = request.params;

    if (!title || !author || !publishYear || !price) {
      return response.status(400).send({
        msg: "Please provide all required fields (title, author, publishYear, price)",
      });
    } else {
      const updatedBook = await Book.findByIdAndUpdate(
        id,
        { title, author, publishYear, price }
      );
      if (!updatedBook) {
        return response.status(404).send({
          msg: "Book not found.",
        });
      }
      return response.status(200).send(updatedBook);
    }
  } catch (error) {
    console.error(error);
    response.status(500).send({ msg: `Error: ${error.message}` });
  }
});
export { bookRouter };

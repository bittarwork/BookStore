import { Router, request, response } from "express";
import { Book } from "../models/books.js";

const bookRouter = Router();
// add new book
bookRouter.post("/addBook", async (request, response, next) => {
  try {
    const { title, author, publishYear } = request.body;

    if (!title || !author || !publishYear) {
      return response.status(400).send({
        msg: "Please provide all required fields (title, author, publishYear)",
      });
    }

    const newBook = {
      title,
      author,
      publishYear,
    };

    const createdBook = await Book.create(newBook);

    return response.status(201).send(createdBook);
  } catch (error) {
    console.error(error);
    response.status(500).send({ msg: `Error: ${error.message}` });
  }
});
// retrive all book from db : 
bookRouter.get ("/book" , (request, response) => { 
    
})
export { bookRouter };

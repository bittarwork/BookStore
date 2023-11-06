import express, { request, response } from "express";
import mongoose from "mongoose";
import { PORT, conecctionString } from "./config.js";
import { bookRouter } from "./routes/book.js";

const app = express();
app.use(express.json());
app.use("/api", bookRouter);
app.use((request, response, next) => {
  console.log(request.url);
  next();
});

mongoose
  .connect(conecctionString)
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

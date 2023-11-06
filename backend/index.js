import express, { request, response } from "express";
import mongoose from "mongoose";
import { PORT, conecctionString } from "./config.js";
import { bookRouter } from "./routes/book.js";

const app = express();
/!* ------------------------------- meddilware ------------------------------- */;
app.use(express.json());
app.use((request, response, next) => {
  console.log(request.url);
  next();
});
/!* --------------------------------- routers -------------------------------- */;
app.use("/api", bookRouter);
/!* ---------------------------- mongoose dataBase --------------------------- */;
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

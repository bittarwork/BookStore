import express from "express";
const app = express();
import { PORT } from "./config.js";
/!* -------------------------------- midelware ------------------------------- */


app.listen(PORT, () => console.log(`app listening on port ${PORT}!`));

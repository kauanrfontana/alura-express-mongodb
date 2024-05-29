import express from "express";
import databaseConnection from "./config/dbConnect.js";
import routes from "./Routes/index.js";
import errorMiddleware from "./middlewares/errorMidleware.js";


const connection = await databaseConnection();

connection.on("error", (error) => {
  console.error("connection error", error);
});

connection.once("open", () => {
  console.log("connection success");
});

const app = express();
routes(app);

app.use(errorMiddleware);

export default app;
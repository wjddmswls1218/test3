import express from "express";
import dotenv from "dotenv"; //보안 코딩을 위해
dotenv.config(); //보안 코딩
import morgan from "morgan";
import globalRouter from "./router/globalRouter";
import boardRouter from "./router/boardRouter";
import path from "path";
import connect from "../db";

const PORT = process.env.PORT;

const app = express();

app.set("view engine", "pug");
app.use(morgan(`dev`));
app.use(express.static(path.join(_dirname, "/assets")));

connect();

app.use("/", gobalRouter);
app.use("/board", boardRouter);

app.listen(PORT, () => {
  console.log(`${PORT} SEFVER START `);
});

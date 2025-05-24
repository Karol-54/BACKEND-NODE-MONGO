import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import categoriaRouter from "./routes/categorias.routes.js";

const app = express();

dotenv.config();

app.use("/categoria", categoriaRouter);

const PORT = process.env.PORT;

conectarDB();

app.listen(PORT, () => {
  console.log(`super servidor corriendo en el puerto ${PORT}`);
});

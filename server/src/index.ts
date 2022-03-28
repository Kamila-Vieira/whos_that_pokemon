import express from "express";
import routes from "./routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(process.env.PORT, () => {
  `Acessar http://localhost:${process.env.PORT}`;
  console.log(`Acessar http://localhost:${process.env.PORT}`);
  console.log(`Servidor executando na porta ${process.env.PORT}`);
});

import express from "express";
import routes from "./routes";

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(8000, () => {
  console.log("Acessar http://localhost:8000");
  console.log("Servidor executando na porta 8000");
});

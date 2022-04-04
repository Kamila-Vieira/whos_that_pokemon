import app from "./app";

const PORT = process.env.PORT || 8000;
const HOSTNAME = process.env.HOST || "http://localhost";

const server = app.listen(PORT, () => {
  `Acessar ${HOSTNAME}:${PORT}`;
  console.log(`Acessar ${HOSTNAME}:${PORT}`);
  console.log(`Servidor executando na porta ${PORT}`);
});

export default server;

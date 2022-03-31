import { Request, Response } from "express";

const initialRoute = (_request: Request, response: Response) => {
  return response.status(200).json({
    message: `Bem vindos(as) a API "Who's that pokemon?"`,
    routes: [
      {
        description: "Mostrar um Pokemon",
        type: "GET",
        path: "/pokemon/{Id}",
      },
      {
        description: "Mostrar todos os Pokemons",
        type: "GET",
        path: "/pokemons",
      },
      {
        description: "Criar um Pokemon",
        type: "POST",
        path: "/pokemon",
      },
      {
        description: "Atualizar um Pokemon",
        type: "PUT",
        path: "/pokemon/{Id}",
      },
      {
        description: "Deletar um Pokemon",
        type: "DELETE",
        path: "/pokemon/{Id}",
      },
    ],
  });
};

export default initialRoute;

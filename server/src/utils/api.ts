import axios from "axios";

interface GraphQLVariables {
  limit: number;
}

interface GraphQL {
  query: string;
  variables: GraphQLVariables;
  operationName: string;
}

const Api = async (limit: number = 151) => {
  const { errors, data } = await pokemonQuery(limit);
  if (errors) {
    console.error(errors);
  }
  return JSON.parse(JSON.stringify(data, null, 2));
};

const fetchGraphQL = async ({ query, variables, operationName }: GraphQL) => {
  const result = await axios({
    url: "https://beta.pokeapi.co/graphql/v1beta",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Method-Used": "graphiql",
    },
    data: JSON.stringify({
      query,
      variables,
      operationName,
    }),
  });

  return await result.data;
};

const pokemonQuery = (limit: number) => {
  const operationName = "pokemon_details";
  const query = `
    query pokemon_details($limit: Int) {
      species: pokemon_v2_pokemonspecies(limit: $limit) {
        name
        pokemon: pokemon_v2_pokemons_aggregate {
          nodes {
            height
            weight 
            types: pokemon_v2_pokemontypes {
              type: pokemon_v2_type {
                name
              }
            }
          }
        }
      }
    }
  `;

  return fetchGraphQL({ query, variables: { limit }, operationName });
};

export default Api;

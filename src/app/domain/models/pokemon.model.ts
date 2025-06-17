/**
 * Representa a entidade Pokémon principal da nossa aplicação.
 * Contém apenas os dados essenciais para as telas de listagem e detalhes,
 * mantendo o modelo agnóstico de qualquer API externa.
 */

export interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
}
import { Observable } from 'rxjs';
import { PokemonDetail } from './pokemon-detail.model';
import { Pokemon } from './pokemon.model';

export abstract class PokemonRepository {
  /**
   * Contrato para obter uma lista paginada de Pokémons.
   * @param offset - O ponto de início da busca.
   * @param limit - O número de itens a serem buscados.
   * @returns Um Observable com um array de Pokémons.
   */

  abstract getPokemons(offset: number, limit: number): Observable<Pokemon[]>;

  /**
   * Contrato para obter um Pokémon específico por ID.
   * @param id - O ID do Pokémon a ser buscado.
   * @returns Um Observable com os detalhes do Pokémon.
   */
  abstract getPokemonById(id: number): Observable<PokemonDetail>;
}

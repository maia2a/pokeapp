import { Observable } from 'rxjs';
import { Pokemon } from './pokemon.model';

export abstract class PokemonRepository {
  /**
   * Contrato para obter uma lista paginada de Pokémons.
   * @param offset - O ponto de início da busca.
   * @param limit - O número de itens a serem buscados.
   * @returns Um Observable com um array de Pokémons.
   */

  abstract getPokemons(offset: number, limit: number): Observable<Pokemon[]>;
}

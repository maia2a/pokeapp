import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDetail } from '../models/pokemon-detail.model';
import { PokemonRepository } from '../models/pokemon.repository';

@Injectable({
  providedIn: 'root',
})
export class GetPokemonUseCase {
  constructor(private pokemonRepository: PokemonRepository) {}

  /**
   * Executa o caso de uso para obter a lista de Pokémons.
   * @param offset - O ponto de início da busca.
   * @param limit - O número de itens a serem buscados.
   */
  execute(offset: number, limit: number): Observable<PokemonDetail[]> {
    return this.pokemonRepository.getPokemons(offset, limit);
  }
}

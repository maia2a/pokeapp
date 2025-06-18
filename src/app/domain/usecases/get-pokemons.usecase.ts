import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
import { PokemonRepository } from '../models/pokemon.repository';

@Injectable({
  providedIn: 'root',
})
export class GetPokemonsUseCase {
  constructor(private pokemonRepository: PokemonRepository) {}

  /**
   * Executa o caso de uso para obter a lista de Pokémons.
   * @param offset - O ponto de início da busca.
   * @param limit - O número de itens a serem buscados.
   */
  execute(offset: number, limit: number): Observable<Pokemon[]> {
    return this.pokemonRepository.getPokemons(offset, limit);
  }
}

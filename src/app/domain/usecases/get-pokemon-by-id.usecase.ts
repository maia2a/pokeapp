import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDetail } from '../models/pokemon-detail.model';
import { PokemonRepository } from '../models/pokemon.repository';

@Injectable({
  providedIn: 'root',
})
export class GetPokemonByIdUseCase {
  constructor(private pokemonRepository: PokemonRepository) {}

  execute(id: number): Observable<PokemonDetail> {
    return this.pokemonRepository.getPokemonById(id);
  }
}

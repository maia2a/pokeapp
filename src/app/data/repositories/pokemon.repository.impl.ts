import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../../domain/models/pokemon.model';
import { PokemonRepository } from '../../domain/repositories/pokemon.repository';
import { PokeApiService } from '../services/pokeapi.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonRepositoryImpl implements PokemonRepository {
  constructor(private pokeApiService: PokeApiService) {}

  getPokemons(limit: number, offset: number): Observable<Pokemon[]> {
    return this.pokeApiService.getPokemons(limit, offset);
  }
}

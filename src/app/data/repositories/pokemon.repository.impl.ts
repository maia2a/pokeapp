import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PokemonDetail } from 'src/app/domain/models/pokemon-detail.model';
import { Pokemon } from '../../domain/models/pokemon.model';
import { PokemonRepository } from '../../domain/models/pokemon.repository';
import { PokeApiService } from '../services/pokeapi.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonRepositoryImpl implements PokemonRepository {
  constructor(private pokeApiService: PokeApiService) {}

  getPokemons(offset: number, limit: number): Observable<Pokemon[]> {
    return this.pokeApiService.getPokemons(offset, limit);
  }

  getPokemonById(id: number): Observable<PokemonDetail> {
    return this.pokeApiService.getPokemonById(id).pipe(
      map((apiResponse) => {
        //Lógica de transformação
        const pokemonDetail: PokemonDetail = {
          id: apiResponse.id,
          name: apiResponse.name,
          height: apiResponse.height,
          weight: apiResponse.weight,
          sprites: {
            front_default: apiResponse.sprites.front_default,
            front_shiny: apiResponse.sprites.front_shiny,
            back_default: apiResponse.sprites.back_default,
            back_shiny: apiResponse.sprites.back_shiny,
          },
          abilities: apiResponse.abilities.map((a: any) => ({
            name: a.ability.name,
            is_hidden: a.is_hidden,
          })),
          stats: apiResponse.stats.map((s: any) => ({
            name: s.stat.name,
            base_stat: s.base_stat,
          })),
          types: apiResponse.types.map((t: any) => ({
            name: t.type.name,
          })),
        };
        return pokemonDetail;
      })
    );
  }
}

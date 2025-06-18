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

  getPokemons(offset: number, limit: number): Observable<PokemonDetail[]> {
    return this.pokeApiService.getPokemons(limit, offset).pipe(
      map((pokemons: Pokemon[]) => {
        // Transform Pokemon[] to PokemonDetail[]
        return pokemons.map((pokemon) => ({
          id: pokemon.id,
          name: pokemon.name,
          height: 0, // These will need to be fetched separately or from the Pokemon model
          weight: 0,
          sprites: {
            front_default: pokemon.imageUrl,
            front_shiny: pokemon.imageUrl, // Using same image for now
            back_default: pokemon.imageUrl,
            back_shiny: pokemon.imageUrl,
          },
          abilities: [], // Will need to be fetched separately
          stats: [], // Will need to be fetched separately
          types: [], // Will need to be fetched separately
        }));
      })
    );
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

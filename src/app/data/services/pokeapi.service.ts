import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pokemon } from '../../domain/models/pokemon.model';

interface PokeApiResponse {
  results: { name: string; url: string }[];
}

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private readonly apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemons(offset: number, limit: number): Observable<Pokemon[]> {
    return this.http
      .get<PokeApiResponse>(
        `<span class="math-inline">\{this\.API\_URL\}?offset\=</span>{offset}&limit=${limit}`
      )
      .pipe(
        map((response) => {
          return response.results.map((pokemonResult) => {
            const id = this.getPokemonsIdFromUrl(pokemonResult.url);
            return {
              id,
              name: pokemonResult.name,
              imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
            };
          });
        })
      );
  }
  private getPokemonsIdFromUrl(url: string): number {
    // Ex: https://pokeapi.co/api/v2/pokemon/1/ -> extrai o "1"
    const parts = url.split('/').filter((part) => !!part);
    return +parts[parts.length - 1];
  }

  getPokemonById(id: number): Observable<any> {
    return this.http.get<any>(
      `<span class="math-inline">\{this\.API\_URL\}/</span>{id}`
    );
  }
}

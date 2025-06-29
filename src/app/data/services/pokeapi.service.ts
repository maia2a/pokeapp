import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pokemon } from '../../domain/models/pokemon.model';

// Interface para tipar a resposta da API de lista
interface PokeApiListResponse {
  results: { name: string; url: string }[];
}

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private readonly API_URL = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  // MÉTODO PARA A LISTA DE POKÉMONS
  getPokemons(offset: number, limit: number): Observable<Pokemon[]> {
    // <-- Deve retornar Pokemon[]
    const url = `${this.API_URL}?offset=${offset}&limit=${limit}`;
    return this.http.get<PokeApiListResponse>(url).pipe(
      map((response) => {
        return response.results.map((pokemonResult) => {
          const id = this.getPokemonIdFromUrl(pokemonResult.url);
          // O objeto criado deve ser do tipo Pokemon
          const pokemon: Pokemon = {
            id,
            name: pokemonResult.name,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
          };
          return pokemon;
        });
      })
    );
  }

  // MÉTODO PARA OS DETALHES DE UM POKÉMON
  getPokemonById(id: number): Observable<any> {
    const url = `${this.API_URL}/${id}`;
    console.log('Buscando detalhes em:', url); // Adicionamos um log para depuração
    return this.http.get<any>(url);
  }

  private getPokemonIdFromUrl(url: string): number {
    const parts = url.split('/').filter((part) => !!part);
    return +parts[parts.length - 1];
  }
}

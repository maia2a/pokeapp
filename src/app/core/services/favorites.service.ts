import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject, map, Observable, take } from 'rxjs';
import { Pokemon } from 'src/app/domain/models/pokemon.model';

const FAVORITES_KEYS = 'my-favorites';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  // BehaviorSubject mantém o estado atual e notifica os observadores sobre mudanças.
  // Ele guarda um array de Pokémons favoritos.
  private favorites$ = new BehaviorSubject<Pokemon[]>([]);

  constructor(private storage: Storage) {
    this.initStorage();
  }

  private async initStorage() {
    await this.storage.create();
    const storedFavorites = await this.storage.get(FAVORITES_KEYS);
    this.favorites$.next(storedFavorites || []);
  }

  /**
   * Retorna um Observable com a lista atual de favoritos.
   * A UI vai "escutar" este Observable para se atualizar.
   */
  getFavorites(): Observable<Pokemon[]> {
    return this.favorites$.asObservable();
  }

  /**
   * Verifica se um Pokémon específico está na lista de favoritos.
   * Retorna um Observable<boolean> para uso reativo.
   */
  isFavorite(pokemonId: number): Observable<boolean> {
    return this.favorites$.pipe(
      map((favorites) => favorites.some((fav) => fav.id === pokemonId))
    );
  }

  /**
   * Adiciona um Pokémon aos favoritos.
   */
  addFavorite(pokemon: Pokemon) {
    this.favorites$.pipe(take(1)).subscribe((favorites) => {
      const newFavorites = [...favorites, pokemon];
      this.favorites$.next(newFavorites);
      this.storage.set(FAVORITES_KEYS, newFavorites);
    });
  }

  /**
   * Remove um Pokémon dos favoritos.
   */
  removeFavorite(pokemonId: number) {
    this.favorites$.pipe(take(1)).subscribe((favorites) => {
      const newFavorites = favorites.filter((fav) => fav.id !== pokemonId);
      this.favorites$.next(newFavorites);
      this.storage.set(FAVORITES_KEYS, newFavorites);
    });
  }
}

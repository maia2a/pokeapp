import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Observable, take } from 'rxjs';
import { FavoritesService } from 'src/app/core/services/favorites.service';
import { PokemonDetail } from 'src/app/domain/models/pokemon-detail.model';
import { Pokemon } from 'src/app/domain/models/pokemon.model';
import { GetPokemonByIdUseCase } from 'src/app/domain/usecases/get-pokemon-by-id.usecase';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrl: './pokemon-detail.page.scss',
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class PokemonDetailPage implements OnInit {
  pokemon$!: Observable<PokemonDetail>;
  isFavorite$!: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private getPokemonByIdUseCase: GetPokemonByIdUseCase,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit() {
    const pokemonId = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemon$ = this.getPokemonByIdUseCase.execute(+pokemonId);

      this.isFavorite$ = this.favoritesService.isFavorite(+pokemonId);
    }
  }
  toggleFavorite() {
    const pokemonId = +this.route.snapshot.paramMap.get('id')!;
    this.pokemon$.pipe(take(1)).subscribe((pokemon) => {
      this.isFavorite$.pipe(take(1)).subscribe((isFav) => {
        if (isFav) {
          this.favoritesService.removeFavorite(pokemonId);
        } else {
          const basicPokemon: Pokemon = {
            id: pokemon.id,
            name: pokemon.name,
            imageUrl: pokemon.sprites.front_default,
          };
          this.favoritesService.addFavorite(basicPokemon);
        }
      });
    });
  }
}

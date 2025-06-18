import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InfiniteScrollCustomEvent, IonicModule } from '@ionic/angular';
import { Pokemon } from 'src/app/domain/models/pokemon.model';
import { GetPokemonsUseCase } from 'src/app/domain/usecases/get-pokemons.usecase';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink],
})
export class PokemonListPage implements OnInit {
  pokemons: Pokemon[] = [];
  private offset = 0;
  private readonly limit = 25;
  constructor(private getPokemonsUseCase: GetPokemonsUseCase) {}

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons(event?: InfiniteScrollCustomEvent) {
    this.getPokemonsUseCase.execute(this.offset, this.limit).subscribe({
      next: (newPokemons: Pokemon[]) => {
        this.pokemons = [...this.pokemons, ...newPokemons];
        this.offset += this.limit;

        //Se um evento de scroll infinito foi passado, completa ele
        event?.target.complete();
      },
      error: (err) => {
        console.error('Erro ao buscar pokemons', err);
        event?.target.complete();
      },
    });
  }
  //Este metodo sera chamado pelo componente de scroll infinito
  onIonInfinite(event: any) {
    this.loadPokemons(event as InfiniteScrollCustomEvent);
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollCustomEvent, IonicModule } from '@ionic/angular';
import { PokemonDetail } from 'src/app/domain/models/pokemon-detail.model';
import { GetPokemonUseCase } from 'src/app/domain/usecases/get-pokemons.usecase';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class PokemonListPage implements OnInit {
  pokemons: PokemonDetail[] = [];
  private offset = 0;
  private readonly limit = 25;
  constructor(private getPokemonsUseCase: GetPokemonUseCase) {}

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons(event?: InfiniteScrollCustomEvent) {
    this.getPokemonsUseCase.execute(this.offset, this.limit).subscribe({
      next: (newPokemons) => {
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
  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.loadPokemons(event);
  }
}

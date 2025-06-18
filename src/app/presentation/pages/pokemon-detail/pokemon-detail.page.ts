import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Observable } from 'rxjs';
import { PokemonDetail } from 'src/app/domain/models/pokemon-detail.model';
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

  constructor(
    private route: ActivatedRoute,
    private getPokemonByIdUseCase: GetPokemonByIdUseCase
  ) {}

  ngOnInit() {
    const pokemonId = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemon$ = this.getPokemonByIdUseCase.execute(+pokemonId);
    }
  }
}

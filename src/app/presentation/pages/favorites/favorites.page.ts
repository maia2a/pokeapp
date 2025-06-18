import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Observable } from 'rxjs';
import { FavoritesService } from 'src/app/core/services/favorites.service';
import { Pokemon } from 'src/app/domain/models/pokemon.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink],
})
export class FavoritesPage {
  // Pega o observable diretamente do serviço
  public favorites$!: Observable<Pokemon[]>;
  constructor(private favoritesService: FavoritesService) {
    this.favorites$ = this.favoritesService.getFavorites();
  }
}

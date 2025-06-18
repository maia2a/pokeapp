import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokemon-list', // Redireciona para a nossa lista
    pathMatch: 'full',
  },
  {
    path: 'pokemon-list',
    loadChildren: () =>
      import('./presentation/pages/pokemon-list/pokemon-list.page').then(
        (m) => m.PokemonListPage
      ),
  },
  {
    path: 'pokemon-detail/:id',
    loadComponent: () =>
      import('./presentation/pages/pokemon-detail/pokemon-detail.page').then(
        (m) => m.PokemonDetailPage
      ),
  },
];

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
      import('./presentation/pages/pokemon-list/pokemon-list.module').then(
        (m) => m.PokemonListPageModule
      ),
  },
];

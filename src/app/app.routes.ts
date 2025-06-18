import { Routes } from '@angular/router';

export const routes: Routes = [
  // A rota de detalhes fica no nível superior para cobrir as abas
  {
    path: 'pokemon-detail/:id',
    loadComponent: () =>
      import('./presentation/pages/pokemon-detail/pokemon-detail.page').then(
        (m) => m.PokemonDetailPage
      ),
  },
  // A rota principal agora carrega o componente de Abas
  {
    path: '',
    loadComponent: () =>
      import('./presentation/layout/tabs/tabs.page').then((m) => m.TabsPage),
    // As rotas das abas são definidas como filhas
    children: [
      {
        path: 'pokemon-list',
        loadComponent: () =>
          import('./presentation/pages/pokemon-list/pokemon-list.page').then(
            (m) => m.PokemonListPage
          ),
      },
      {
        path: 'favorites',
        loadComponent: () =>
          import('./presentation/pages/favorites/favorites.page').then(
            (m) => m.FavoritesPage
          ),
      },
      // Redirecionamento para a primeira aba por padrão
      {
        path: '',
        redirectTo: '/pokemon-list',
        pathMatch: 'full',
      },
    ],
  },
  // Rota de fallback caso o usuário acesse /tabs diretamente
  {
    path: 'tabs',
    redirectTo: '/pokemon-list',
    pathMatch: 'full',
  },
];

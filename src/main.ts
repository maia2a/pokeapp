import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';

import { AppComponent } from './app/app.component';

import { provideHttpClient } from '@angular/common/http';
import { enableProdMode } from '@angular/core';
import { routes } from './app/app.routes';
import { PokemonRepositoryImpl } from './app/data/repositories/pokemon.repository.impl';
import { PokemonRepository } from './app/domain/models/pokemon.repository';
import { environment } from './environments/environment.prod';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes),

    provideHttpClient(),
    {
      provide: PokemonRepository,
      useClass: PokemonRepositoryImpl,
    },
  ],
});

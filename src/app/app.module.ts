import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

//Nossas classes de dominio
import { PokemonRepositoryImpl } from './data/repositories/pokemon.repository.impl';
import { PokemonRepository } from './domain/models/pokemon.repository';

@NgModule({
  // AppComponent is standalone, so it should be imported, not declared
  imports: [BrowserModule, IonicModule.forRoot(), HttpClientModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: PokemonRepository, useClass: PokemonRepositoryImpl },
  ],
})
export class AppModule {}

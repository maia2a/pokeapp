import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Nossas classes de dominio
import { HttpClient } from '@angular/common/http';
import { PokemonRepositoryImpl } from './data/repositories/pokemon.repository.impl';
import { PokemonRepository } from './domain/models/pokemon.repository';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClient],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: PokemonRepository, useClass: PokemonRepositoryImpl },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

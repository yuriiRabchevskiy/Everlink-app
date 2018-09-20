import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { GameMachineComponent } from './game-machine/game-machine.component';
import { GameCardsComponent } from './game-cards/game-cards.component';
import { routing } from 'src/app/app.routing';

@NgModule({
  declarations: [
    AppComponent,
    GameMachineComponent,
    GameCardsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

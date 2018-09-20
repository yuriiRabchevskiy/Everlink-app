import { Routes, RouterModule } from '@angular/router';
import { GameCardsComponent } from 'src/app/game-cards/game-cards.component';
import { GameMachineComponent } from 'src/app/game-machine/game-machine.component';

const appRoutes: Routes = [
    { path: '', component: GameCardsComponent },
    { path: 'card', component: GameCardsComponent },
    { path: 'machine', component: GameMachineComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });

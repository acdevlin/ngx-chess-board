import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChessGameComponent } from './components/chess-game/chess-game.component';
import { SettingsComponent } from './components/settings/settings.component';

// sets up routes constant where you define your routes
const routes: Routes = [
  { path: 'play', component: ChessGameComponent },
  { path:'settings', component: SettingsComponent},
  { path: '', redirectTo: 'play', pathMatch: 'full' },
]; 

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { SettingsComponent } from './components/settings/settings.component';

// sets up routes constant where you define your routes
const routes: Routes = [
  { path: 'play', component: AppComponent },
  { path: '', redirectTo: 'play', pathMatch: 'full' },
  { path:'settings', component: SettingsComponent},
]; 

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

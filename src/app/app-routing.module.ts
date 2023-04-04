import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListeRapportsComponent } from './liste-rapports/liste-rapports.component';
import { RapportDetailleComponent } from './rapport-detaille/rapport-detaille.component';
import { AjouterRapportComponent } from './ajouter-rapport/ajouter-rapport.component';

const routes: Route[] = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'liste-rapports', component: ListeRapportsComponent },
  { path: 'rapport-detaille/:id', component: RapportDetailleComponent },
  { path: 'ajouter-rapport', component: AjouterRapportComponent }
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

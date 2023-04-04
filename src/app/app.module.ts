import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ListeRapportsComponent } from './liste-rapports/liste-rapports.component';
import { RapportComponent } from './rapport/rapport.component';
import { HttpClientModule } from '@angular/common/http';
import { RapportDetailleComponent } from './rapport-detaille/rapport-detaille.component';
import { AjouterRapportComponent } from './ajouter-rapport/ajouter-rapport.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListeRapportsComponent,
    RapportComponent,
    RapportDetailleComponent,
    AjouterRapportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

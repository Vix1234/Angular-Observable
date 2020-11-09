import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KorisnikComponent } from './korisnik/korisnik.component';
import { PocetnaComponent } from './pocetna/pocetna.component';

@NgModule({
  declarations: [
    AppComponent,
    KorisnikComponent,
    PocetnaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KorisnikComponent } from './korisnik/korisnik.component';
import { PocetnaComponent } from './pocetna/pocetna.component';

const routes: Routes = [
  {path: '', component: PocetnaComponent},
  {path: 'korisnik/:id', component: KorisnikComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnDestroy, OnInit } from '@angular/core';
import {Observable, interval, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit, OnDestroy {
  brojeviObsSubscription: Subscription;
  mojaObsSubscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    const brojevi = interval(1000);
    const dupliraniBroj = map(
      (podatak:number) => {
        return podatak * 2;
      }
    )

    const dupliraniBrojevi = dupliraniBroj(brojevi);
    this.brojeviObsSubscription = dupliraniBrojevi.subscribe(
      (broj: number) => {
        console.log(broj);
      }
    );  

    const observable = new Observable<string>(observer => {
      setTimeout(() => {
        observer.next('prvi paket');
      }, 2000);
      setTimeout(() => {
        observer.next('drugi paket');
      }, 4000);
      setTimeout(() => {
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('treci paket')
      }, 6000);
    });
    this.mojaObsSubscription = observable.subscribe(
      (podatak: string) => {console.log('Next logged:' + podatak);},
      (error:string) => {console.log('Error loged: '+ error);},
      () => {console.log('Zavrseno');}
    )
  }

  ngOnDestroy(){
    this.brojeviObsSubscription.unsubscribe();
    this.mojaObsSubscription.unsubscribe();
  }
  
}

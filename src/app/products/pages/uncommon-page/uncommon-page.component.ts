import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18nSelect
  public name: string= 'Fernando';
  public gender: 'male'| 'female' = 'male';

  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient():void {
    this.name = 'Melisa';
    this.gender = 'female';
  }

  // i18nPlural

  public clients = ['Maria','Pedro','Fernando','Irina', 'Cristina', 'Roma', 'Nastia', ]
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient(): void
  {
    this.clients.shift();
  }


  // keyPipe
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value))
  );

  public myPromiseValue: Promise<string> = new Promise( (resolve, reject)  => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa.' );
      console.log('Tenemos data en la promesa.' )
    }, 3500);
  })

}

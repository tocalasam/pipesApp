import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameUpper: string = 'Borja Real';
  public nameLower: string = 'Fernando HERRERA';
  public nameTitle: string = 'IrInA GuSsArOvA';
  public customDate: Date = new Date();

}

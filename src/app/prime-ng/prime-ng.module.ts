import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';


@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule,
    ToolbarModule,
    TableModule,
  ]
})
/*
  1. (primeNg.module)
    Exportamos el modulo de primeNg

    2.1 (shared.module)
      Importamos el modulo de primeNg.
      Exportamos MenuComponent

      2.1.1 (menu.component)
        html: pinta para el usuario.
          <p-menubar [model]="menuItems"></p-menubar>
        ts: tiene los componentes del menu.
          public menuItems: MenuItem[]= [];

    2.2 (routing.module)
      Importa RouterModule.forRoot(routes)
      Exporta RouterModule

      3. (app.module)
        Importamos shared. (shared.module)
        Importamos AppRoutingModule. (routing.module)
        Importamos BrowserModule. (interfaz Browser)

        4. app.component html
          usa el componente (shared.module -> que tiene el componente menu.component )

*/
export class PrimeNgModule { }

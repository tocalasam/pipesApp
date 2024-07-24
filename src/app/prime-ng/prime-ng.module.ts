import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
/*
products.module
  declara: elementos que usa (paginas y pipes)
  importa: importa los modulos que necesita utilizar para funcionar
    - CommonModule: elementos base
    - ProductsRoutingModule: rutas
    - PrimeNgModule: componentes de primeNg

PrimeNg.module
  Solo exporta elementos.
  No los declara por que no los usa.
*/

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
    EXPORTA COMPONENTES pertenecientes del modulo de primeNg

    2.1 (shared.module)
        2.1.1 Declara: elementos que usa.
          - MenuComponent
          2.1.1.1 (menu.component)
            html: pinta para el usuario.
              <p-menubar [model]="menuItems"></p-menubar>
            ts: tiene los componentes del menu.
              public menuItems: MenuItem[]= [];

        2.1.2 Importamos los modulos que necesita
          - CommonModule
          - PrimeNgModule

        2.1.3 Exportamos lo que necesitan otros módulos
          - MenuComponent

    2.2 (routing.module)
      Importa RouterModule.forRoot(routes)
      Exporta RouterModule

    2.3 (product.module)
      2.3.1 declara: elementos que usa (paginas y pipes)
        2.3.1.1 páginas
          - BasicsPageComponent,
          - NumbersPageComponent,
          - UncommonPageComponent,
          - OtherComponent,

        2.3.1.2.2 pipes
          - ToggleCasePipe,
          - CanFlyPipe,
          - SortByPipe

      2.3.2 importa: importa los modulos que necesita utilizar para funcionar
        - CommonModule: elementos base
        - ProductsRoutingModule: rutas
        - PrimeNgModule: componentes de primeNg

      3. (app.module)
        Importamos shared. (shared.module)
        Importamos AppRoutingModule. (routing.module)
        Importamos BrowserModule. (interfaz Browser)

        4. app.component html
          usa el componente (shared.module -> que tiene el componente menu.component )
*/
export class PrimeNgModule { }

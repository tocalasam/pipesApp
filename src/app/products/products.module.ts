import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

import { CanFlyPipe } from './pipes/can-fly.pipe';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OtherComponent } from './pages/other/other.component';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';

/*
Enrutamientos (importaciones (padres importan modulos hijos) -> aguas arriba):
  1. app.module importa AppRoutingModule
    2. app-routing.module (ruta padre espacio vacio) importa products.module
      3. products.module importa ProductsRoutingModule (rutas hijas)
        4. ProductsRoutingModule (rutas hijas) tiene definida las 4 rutas existentes:
          5. Routes (hijas):
            - { path: '**', component: BasicsPageComponent }
            - { path: '', component: BasicsPageComponent }
            - { path: 'numbers', component: NumbersPageComponent }
            - { path: 'uncommon', component: UncommonPageComponent }
            - { path: 'customs', component: OtherComponent }

Exportacion de componentes (los hijos exportan componentes a sus padres).
   1. menu.component
    html. dibuja el ToolBar
    ts. asocia los elementos del menú con router
      2 shared.Module
          Declara
          - MenuComponent
          Exporta
          - MenuComponent
        3 app.Module
          import shared.Module
          3.1 app.component.html
            dibuja desde share <shared-menu></shared-menu>
*/

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
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OtherComponent,

    ToggleCasePipe,
    CanFlyPipe,
    SortByPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule,
  ],
})
export class ProductsModule { }

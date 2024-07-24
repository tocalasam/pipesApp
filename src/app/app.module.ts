import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

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


// configuracion del local de la app
import localeEs from '@angular/common/locales/es'
import localeFrCA from '@angular/common/locales/fr-CA'

import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs)
registerLocaleData(localeFrCA)

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

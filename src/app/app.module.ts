import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

/*
  1. (primeNg.module)
    Exportamos el modulo de primeNg

    2.1 (shared.module)
      Importamos el modulo de primeNg.
      Exportamos MenuComponent.

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

/*
Enrutamientos:
  app.module importa AppRoutingModule
    app-routing.module importa products.module
      products.module importa ProductsRoutingModule
        ProductsRoutingModule tiene las 3 rutas existentes:
          basicPage o path por defecto -> Basics-page.compoment
          Numbers -> lleva a Numbers-page.Component
          UncommonPage -> lleva a Uncommon-page.Component
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

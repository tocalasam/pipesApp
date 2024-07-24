import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/*
  routes:
    path: representa el path origen (string vacio)
      LoadChildren(rutaPadre): carga los hijos (impotados de products.module)
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

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./products/products.module')
      .then( m => m.ProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

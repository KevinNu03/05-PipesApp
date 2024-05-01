import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'Pipes',
    loadChildren: () => import('./products/Products.routes').then(m => m.productsRoutes)
  }
]

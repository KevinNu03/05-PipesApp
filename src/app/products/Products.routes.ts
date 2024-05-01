import { Routes } from '@angular/router';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { OrderComponent } from './pages/order/order.component';

export const productsRoutes: Routes = [
  {
    path:'Basics',
    component: BasicsPageComponent
  },
  {
    path: 'Numbers',
    component: NumbersPageComponent
  },
  {
    path: 'Uncommon',
    component: UncommonPageComponent
  },
  {
    path: 'Custom',
    component: OrderComponent
  }
]

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'detail/:id',
    loadComponent: () => import('./products/pages/detail/detail.page').then(m => m.DetailPage)
  },
  {
    path: 'cart',
    loadComponent: () => import('./carts/pages/cart/cart.page').then( m => m.CartPage)
  },


];
// get_suggestions(event: any) {
//   this.search_text = event.target.value;
//   for (let i = 0; i < this.suggestions.length; i++) {

//   }

// }

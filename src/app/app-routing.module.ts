import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'item-listing',
    loadChildren: () => import('./item-listing/item-listing.module').then( m => m.ItemListingPageModule)
  },
  {
    path: 'item-listing-modal',
    loadChildren: () => import('./item-listing-modal/item-listing-modal.module').then( m => m.ItemListingModalPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

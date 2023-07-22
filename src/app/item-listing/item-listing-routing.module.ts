import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemListingPage } from './item-listing.page';

const routes: Routes = [
  {
    path: '',
    component: ItemListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemListingPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemListingModalPage } from './item-listing-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ItemListingModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemListingModalPageRoutingModule {}

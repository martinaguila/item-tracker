import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemListingModalPageRoutingModule } from './item-listing-modal-routing.module';

import { ItemListingModalPage } from './item-listing-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemListingModalPageRoutingModule
  ],
  declarations: [ItemListingModalPage]
})
export class ItemListingModalPageModule {}

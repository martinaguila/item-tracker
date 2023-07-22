import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemListingPageRoutingModule } from './item-listing-routing.module';

import { ItemListingPage } from './item-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemListingPageRoutingModule
  ],
  declarations: [ItemListingPage]
})
export class ItemListingPageModule {}

import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ItemListingModalPage } from '../item-listing-modal/item-listing-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items: any[] = [];
  totalAmount: number = 0;

  constructor(
    private modalCtrl: ModalController
  ) {}

  ngOnInit(){
    this.addItem();
  }

  addItem() {
    this.items.push({ name: '', price: 0, quantity: 1 });
    this.updateTotal();
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
    this.updateTotal();
  }

  updateTotal() {
    this.totalAmount = this.items.reduce(
      (total, item) => total + item.price * item.quantity,
       0
    );
  }

  clearPrice(item: any) {
    if (item.price === 0) {
      item.price = null;
    }
  }

  clearQuantity(item: any) {
    if (item.quantity === 1) {
      item.quantity = null;
    }
  }

  resetPrice(item: any) {
    if (!item.price) {
      item.price = 0;
    }
  }

  async openSummary(){
    const modal = await this.modalCtrl.create({
      component: ItemListingModalPage,
      cssClass: 'item-modal',
      componentProps: {
        'itemData': this.items,
        'component': 'items',
        'totalAmount': this.totalAmount 
      },
      // backdropDismiss: false
    });

    modal.onDidDismiss().then((val) => {
    });

    return await modal.present();
  }
  
  clearItems(){
    this.items = [];
    this.totalAmount = 0;
  }

}
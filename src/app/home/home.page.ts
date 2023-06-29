import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items: any[] = [];
  totalAmount: number = 0;

  constructor() {}

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

}
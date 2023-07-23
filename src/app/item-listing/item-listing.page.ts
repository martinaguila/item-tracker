import { Component, OnInit } from '@angular/core';
import { ItemListingModalPage } from '../item-listing-modal/item-listing-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-item-listing',
  templateUrl: './item-listing.page.html',
  styleUrls: ['./item-listing.page.scss'],
})
export class ItemListingPage implements OnInit {

  tableData: { item: string, quantity: string, checked: boolean }[] = [];
  newItem: string = '';
  newQuantity: string = '';

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.loadItem();
  }

  addItem() {
    if (this.newItem && this.newQuantity !== '') {
      const newItemData = { item: this.newItem, quantity: this.newQuantity, checked: false };
      this.tableData.push(newItemData);
      localStorage.setItem('tableData', JSON.stringify(this.tableData));
      this.newItem = '';
      this.newQuantity = '';
    }
  }

  deleteItem(index: number) {
    this.tableData.splice(index, 1);
    localStorage.setItem('tableData', JSON.stringify(this.tableData));
  }

  loadItem(){
    const storedData = localStorage.getItem('tableData');
    if (storedData !== null) {
      const parsedData = JSON.parse(storedData);
      this.tableData = parsedData;
    } else {
      console.log("No data found in localStorage.");
    }
  }

  toggleItem(index: number) {
    this.tableData[index].checked = !this.tableData[index].checked;
    localStorage.setItem('tableData', JSON.stringify(this.tableData));
  }

  async openSummary(){
    const modal = await this.modalCtrl.create({
      component: ItemListingModalPage,
      cssClass: 'item-modal',
      componentProps: {
        'tableData': this.tableData,
        'component': 'listing'
      },
      // backdropDismiss: false
    });

    modal.onDidDismiss().then((val) => {
    });

    return await modal.present();
  }

}

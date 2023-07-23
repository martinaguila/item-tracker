import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { dismiss } from '@ionic/core/dist/types/utils/overlays';

@Component({
  selector: 'app-item-listing-modal',
  templateUrl: './item-listing-modal.page.html',
  styleUrls: ['./item-listing-modal.page.scss'],
})
export class ItemListingModalPage implements OnInit {

  tableData: { item: string, quantity: string, checked: boolean }[] = [];
  itemData: { name: string, price: string, quantity: string }[] = [];
  component: string = '';
  totalAmount: number = 0;

  constructor(
    private navParams: NavParams,
    private modalCtrl: ModalController
  ) {
    this.tableData = navParams.get('tableData');
    this.itemData = navParams.get('itemData');
    this.component = navParams.get('component');
    this.totalAmount = navParams.get('totalAmount');
  }

  ngOnInit() {
    console.log("this.tableData",this.tableData, this.itemData)
  }

  closeSummary(){
    this.modalCtrl.dismiss();
  }

}

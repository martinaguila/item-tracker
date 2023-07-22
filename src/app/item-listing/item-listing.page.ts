import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-listing',
  templateUrl: './item-listing.page.html',
  styleUrls: ['./item-listing.page.scss'],
})
export class ItemListingPage implements OnInit {

  tableData: { item: string, quantity: string }[] = [];
  newItem: string = '';
  newQuantity: string = '';

  constructor() { }

  ngOnInit() {
    this.loadItem();
  }

  addItem() {
    if (this.newItem && this.newQuantity !== '') {
      const newItemData = { item: this.newItem, quantity: this.newQuantity };
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

}

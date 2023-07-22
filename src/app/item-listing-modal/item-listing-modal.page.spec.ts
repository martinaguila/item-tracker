import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemListingModalPage } from './item-listing-modal.page';

describe('ItemListingModalPage', () => {
  let component: ItemListingModalPage;
  let fixture: ComponentFixture<ItemListingModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ItemListingModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

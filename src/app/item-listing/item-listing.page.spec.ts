import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemListingPage } from './item-listing.page';

describe('ItemListingPage', () => {
  let component: ItemListingPage;
  let fixture: ComponentFixture<ItemListingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ItemListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

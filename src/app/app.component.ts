import { Component } from '@angular/core';

import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private navController: NavController, 
    private router: Router,
    private menuCtrl: MenuController
  ) {}

  navigateToPage1() {
    // Use the NavController for Ionic 4/5 navigation
    this.navController.navigateForward('/home');
  
    // Use the Router for Ionic 3 navigation
    // this.router.navigate(['/page1']);
  }
  
  navigateToPage2() {
    // Use the NavController for Ionic 4/5 navigation
    this.navController.navigateForward('/item-listing');
  
    // Use the Router for Ionic 3 navigation
    // this.router.navigate(['/page2']);
  }
}

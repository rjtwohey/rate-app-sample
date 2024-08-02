import { Component } from '@angular/core';
import { InAppReview } from '@capacitor-community/in-app-review';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  async requestReview() {
    try {
      const result = await InAppReview.requestReview();
      console.log('In App Review Requested:', result);
    } catch (e) {
      console.error('In App Review Request Failed:', e);
    }
  }

}

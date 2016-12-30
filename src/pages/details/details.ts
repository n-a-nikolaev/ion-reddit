import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'details.html'
})
export class DetailsPage {
  public post: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.post = this.navParams.get('post');
  }
}

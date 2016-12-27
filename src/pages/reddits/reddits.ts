import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RedditService } from '../../providers/reddit-service';

@Component({
  selector: 'page-reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {
  public posts: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public redditService: RedditService
  ) { }

  ionViewDidLoad() {
    this.redditService.getPosts('food', '5').subscribe(response => {
      this.posts = response['data']['children'].map(postObj => {
        return postObj.data;
      });
    });
  }

  public viewDetails(post: any) {

  }
}

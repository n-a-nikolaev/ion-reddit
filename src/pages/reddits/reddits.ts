import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RedditService } from '../../providers/reddit-service';
import { DetailsPage } from '../details/details';
import { SettingsService } from '../../providers/settings-service';
import { AppSettings } from '../../types/app-settings.interface';

@Component({
  selector: 'page-reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {
  public posts: any[] = [];
  public settings: AppSettings;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public redditService: RedditService,
    public settingsService: SettingsService
  ) {
    this.settings = this.settingsService.getSettings();
  }

  /**
   * @description
   * Lifecycle hook
   * 
   * @memberOf RedditsPage
   */
  ionViewDidLoad() {
    this.getPosts(this.settings.category, this.settings.limit);
  }

  /**
   * @description
   * Make call to Reddit API and assign results to posts property
   * 
   * @param {string} category - category of posts
   * @param {string} limit - limit of posts
   * 
   * @memberOf RedditsPage
   */
  public getPosts(category: string, limit: string) {
    this.redditService.getPosts(category, limit).subscribe(response => {
      this.posts = response['data']['children'].map(postObj => {
        return postObj.data;
      });
    });
  }

  /**
   * @description
   * Click event handler for 'view' button.
   * Goes to detailed page of the post, which has been clicked
   * 
   * @param {any} post - clicked post item
   * 
   * @memberOf RedditsPage
   */
  public viewDetails(post: any) {
    this.navCtrl.push(DetailsPage, {
      post: post
    })
  }

  /**
   * @description
   * Category select change event handler
   * 
   * @memberOf RedditsPage
   */
  public changeCategory() {
    this.getPosts(this.settings.category, this.settings.limit);
  }
}

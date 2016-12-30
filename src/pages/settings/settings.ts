import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { SettingsService } from '../../providers/settings-service';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  private settings: any = {};

  constructor(
    public toastCtrl: ToastController,
    private settingsService: SettingsService
  ) {
    this.settings = this.settingsService.getSettings();
  }

  /**
   * @description
   * Create toast message with close button
   * 
   * @private
   * 
   * @memberOf SettingsPage
   */
  private showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'App settings were successfully saved',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

  /**
   * @description
   * Save settings to localStorage and show toast message
   * 
   * @private
   * 
   * @memberOf SettingsPage
   */
  private setSettings() {
    this.settingsService.setSettings(this.settings);
    this.showToastWithCloseButton();
  }
}

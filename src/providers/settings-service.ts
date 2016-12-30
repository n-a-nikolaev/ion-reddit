import { Injectable } from '@angular/core';
import { APP_DEFAULTS } from '../app/app.config';

@Injectable()
export class SettingsService {
  private localStorageKey: string = 'settings';
  private defaultSettings: any = {
    category: APP_DEFAULTS.category,
    limit: APP_DEFAULTS.limit
  }

  /**
   * @description
   * Get settings object from localStorage
   * 
   * @returns {any} - settings object containing category and limit
   * 
   * @memberOf SettingsService
   */
  public getSettings(): any {
    return JSON.parse(localStorage.getItem(this.localStorageKey));
  }

  /**
   * @description
   * Set settings object to localStorage
   * 
   * @param {any} settings - settings object containing category and limit
   * 
   * @memberOf SettingsService
   */
  public setSettings(settings: any) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(settings));
  }

  /**
   * @description
   * Check localStorage for saved settings and if no settings found,
   * add defaultSettings
   * 
   * @memberOf SettingsService
   */
  public setDefaults() {
    if (!JSON.parse(localStorage.getItem(this.localStorageKey))) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(this.defaultSettings));
    }
  }
}

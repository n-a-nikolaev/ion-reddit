import { Injectable } from '@angular/core';
import { AppSettings } from '../types/app-settings.interface';

@Injectable()
export class SettingsService {
  private localStorageKey: string = 'settings';
  private defaultSettings: any = {
    category: 'sports',
    limit: 5
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
    return JSON.parse(localStorage.getItem(this.localStorageKey)) as AppSettings;
  }

  /**
   * @description
   * Set settings object to localStorage
   * 
   * @param {any} settings - settings object containing category and limit
   * 
   * @memberOf SettingsService
   */
  public setSettings(settings: AppSettings) {
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

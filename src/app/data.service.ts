import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private lightTileColorSource = new BehaviorSubject('#BAA378');
  currentLightTileColor = this.lightTileColorSource.asObservable();

  private darkTileColorSource = new BehaviorSubject('#61543d');
  currentDarkTileColor = this.darkTileColorSource.asObservable();

  constructor() { }

  updateLightTileColor(color: string) {
    this.lightTileColorSource.next(color)
  }

  updateDarkTileColor(color: string) {
    this.darkTileColorSource.next(color);
  }

}

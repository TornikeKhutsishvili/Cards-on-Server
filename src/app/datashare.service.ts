import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {

  constructor() { }
  public openModal:EventEmitter<any> = new EventEmitter()
}

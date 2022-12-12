import { Component } from '@angular/core';
import { Server } from './server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverArr:Server[] = [];

  serverResultSubscriber(e:Server){
    this.serverArr.push(e);
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Server } from '../server.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-server-in',
  templateUrl: './server-in.component.html',
  styleUrls: ['./server-in.component.css']
})
export class ServerInComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  serverResultEmitter:EventEmitter<Server> = new EventEmitter();
  newServer:Server = new Server();

  addServer(){
    this.serverResultEmitter.emit(this.newServer);
    var uuid = uuidv4();
    this.newServer.id = uuid;
    this.newServer = new Server();
  }
}

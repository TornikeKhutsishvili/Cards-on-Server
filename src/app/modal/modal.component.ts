import { Server } from './../server.model';
import { DatashareService } from './../datashare.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private dtshr:DatashareService) { }

  ngOnInit(): void {
    this.dtshr.openModal.subscribe((x: Server)=>{
      this.serverInfo = x
    })
  }
  serverInfo:Server = new Server()
}

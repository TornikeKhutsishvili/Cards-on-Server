import { Component, Input, OnInit } from '@angular/core';
import { Server } from '../server.model';
import { v4 as uuidv4 } from 'uuid';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-card-server',
  templateUrl: './card-server.component.html',
  styleUrls: ['./card-server.component.css']
})

export class CardServerComponent implements OnInit {

  constructor(private dtsh:DatashareService) { }
  ngOnInit(): void {
  }

  @Input()
  info:Server = new Server();

  delclick(id:any): void{

  }

  moreInfo(){
    this.dtsh.openModal.emit(this.info)
    console.log(this.info)
  }
  closed:boolean = true
}

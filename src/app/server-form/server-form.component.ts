import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface Server {
  name: string;
  content: string;
}

@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.scss'],
})
export class ServerFormComponent implements OnInit {
  @Output() addServerEvent = new EventEmitter<Server>();

  server: Server = { name: '', content: '' };

  ngOnInit() {}

  public addServer(server: Server) {
    this.addServerEvent.emit(server);
  }
}

import { Component } from '@angular/core';

interface Server {
  name: string;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  serversList: Server[] = [];

  public onAddServer(event: Server) {
    this.serversList.push(event);
  }
}

import { Component, Input } from '@angular/core';

interface Server {
  name: string;
  content: string;
}

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent {
  @Input() server: Server = { name: '', content: '' };
}

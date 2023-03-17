import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

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

  @ViewChild('serverContentInputRef', { static: false })
  serverContentInputRef!: ElementRef<HTMLInputElement>;
  // server: Server = { name: '', content: '' }; //this prop was used with ngModel

  ngOnInit() {}

  // public addServer(server: Server) { //emitting ngModel values
  //   this.addServerEvent.emit(server);
  // }

  public addServer(inputRef: HTMLInputElement) {
    this.addServerEvent.emit({
      name: inputRef.value,
      content: this.serverContentInputRef.nativeElement.value,
    });
  }
}

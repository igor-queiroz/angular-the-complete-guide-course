import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.scss'],
})
export class ServerFormComponent implements OnInit {
  public disableButton = true;
  public serverList: string[] = [''];
  public serverName = '';

  ngOnInit() {
    this.buttonCooldown();
  }

  public addServer() {
    this.serverList?.push(this.serverName);
  }

  private buttonCooldown() {
    setTimeout(() => {
      this.disableButton = false;
    }, 2000);
  }
}

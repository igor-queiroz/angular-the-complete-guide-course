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
  public serverParagraphClassStyles = {
    denied: false,
    success: true,
  };
  public inlineStyle = 'text-bg-success';

  ngOnInit() {
    this.buttonCooldown();
  }

  public setInlineStyle() {
    this.inlineStyle = Math.random() < 0.5 ? 'green' : 'red';
    return this.inlineStyle;
  }

  public addServer() {
    this.serverParagraphClassStyles = {
      success: Math.random() < 0.5,
      denied: Math.random() < 0.5,
    };
    this.serverList?.push(this.serverName);
  }

  private buttonCooldown() {
    setTimeout(() => {
      this.disableButton = false;
    }, 2000);
  }
}

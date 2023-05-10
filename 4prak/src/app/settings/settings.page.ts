import { Component, OnInit } from '@angular/core';
import { FireMessageService } from '../services/fire-message.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  username: string;
  actualUsername: string;
  constructor(private firemessage: FireMessageService) { 
    this.username = '';
    this.actualUsername = this.firemessage.getUsername();
  }

  sendUsername() {
    this.firemessage.setUsername(this.username);
    this.actualUsername = this.username;
  }
}

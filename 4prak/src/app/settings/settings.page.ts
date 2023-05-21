import { Component, OnInit } from '@angular/core';
import { FireMessageService } from '../services/fire-message.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  username: string;
  actualUsername: string;
  constructor(private firemessage: FireMessageService, private alertController: AlertController) { 
    this.username = '';
    this.actualUsername = this.firemessage.getUsername();
  }

  async sendUsername() {
    if(await this.firemessage.setUsername(this.username)){
      this.actualUsername = this.firemessage.getUsername();
    } else {
      const alert = await this.alertController.create({
        header: 'Achtung',
        message: 'Name bereits vergeben',
        buttons: ['OK'],
      });
  
      await alert.present();
    }
    
  }
}

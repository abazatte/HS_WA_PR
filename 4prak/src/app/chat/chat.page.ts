import { Component, OnInit } from '@angular/core';
import { FireMessageService } from '../services/fire-message.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage {
  chats: Observable<any[]>;
  message: string;
  constructor(private firemessage: FireMessageService) {
    this.chats = this.firemessage.getChats();
    this.message = "";
  }

  sendMessage(){
    this.firemessage.addMessage(this.firemessage.getUsername(), this.message);
  }
}

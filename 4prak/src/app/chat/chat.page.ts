import { Component, OnInit } from '@angular/core';
import { FireMessageService } from '../services/fire-message.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage {
  chats: Observable<any[]>;
  beautifiedChats: Observable<any[]>;
  message: string;
  constructor(private firemessage: FireMessageService) {
    this.chats = this.firemessage.getChats();
    this.beautifiedChats = this.chats.pipe(
      map(list => {
        const modifiedList = list.map(item => {
          //quelle: https://www.epochconverter.com/programming/#javascript
          //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date


          //quick update führt zu null wert in dem timestamp, deswegen müssen wir es abfangen
          if(item['timestamp']!= null){
            let myDate = new Date (item['timestamp']['seconds']*1000);
            const modifiedItem = {
              "author" : item['author'],
              "text" : item['text'],
              "timestamp" : myDate.toLocaleString()
            }
            return modifiedItem;
          } else {
            return item;
          }
        });
        return modifiedList;
      })
    );

    this.message = "";
  }

  sendMessage(){
    this.firemessage.addMessage(this.firemessage.getUsername(), this.message);
  }
}

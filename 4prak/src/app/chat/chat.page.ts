import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData, orderBy, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  chats: Observable<any[]>;

  constructor(private firestore: Firestore) {
    const coll = collection(firestore, 'room_0');
    const q = query(coll, orderBy('timestamp', 'desc'));
    this.chats = collectionData(q);
  }

  ngOnInit() {
  }

}

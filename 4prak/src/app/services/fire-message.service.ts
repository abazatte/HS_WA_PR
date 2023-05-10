import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, orderBy, query, serverTimestamp } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireMessageService {
  chats: Observable<any[]>;
  //beautifiedChats : Observable<any[]>;

  constructor(private firestore: Firestore) {
    const coll = collection(firestore, 'room_0');
    const q = query(coll, orderBy('timestamp', 'desc'));
    this.chats = collectionData(q).pipe(
      map(list => {
        const modifiedList = list.map(item => {
          //quelle: https://www.epochconverter.com/programming/#javascript
          //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
          let myDate = new Date (item['timestamp']['seconds']*1000);
          const modifiedItem = {
            "author" : item['author'],
            "text" : item['text'],
            "timestamp" : myDate.toLocaleString()
          }
          return modifiedItem;
        });
        return modifiedList;
      })
    );
  }

  public getChats() {
    return this.chats;
  }

  public async addMessage(author: string, text: string) {
    const docRef = await addDoc(collection(this.firestore, 'room_0'), {
      'author': author,
      'text': text,
      'timestamp': serverTimestamp()
    })
  }
}

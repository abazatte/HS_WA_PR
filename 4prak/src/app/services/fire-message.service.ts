import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, orderBy, query, serverTimestamp } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FireMessageService {
  chats: Observable<any[]>;
  username: string = 'default';

  constructor(private firestore: Firestore) {
    const coll = collection(firestore, environment.room);
    const q = query(coll, orderBy('timestamp', 'desc'));
    //es wird die map funktion benutzt, um die hereinkommende observable bei jedem update zu verändern und das datum zu verschönern
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
    const docRef = await addDoc(collection(this.firestore, environment.room), {
      author,
      text,
      timestamp: serverTimestamp()
    })
  }

  public setUsername(username: string){
    console.log('setUsername: '+this.checkIsValid(username)) 
    this.username = username;
  }

  public getUsername() {
    return this.username;
  }

  private checkIsValid(username: string) {
    let bool = true;
    // this.chats.forEach(element => {
    //   element.forEach(item => {
    //     if (item.author === username) {
    //       bool = false;
    //       console.log('in abfrage: '+bool);
    //       return false;
    //     } else {
    //       continue;
    //     }
    //   })
    // });
    this.chats.pipe(map(chat => {
      const modifiedList = chat.map(item => {
        console.log(item);
        if(item.author === username) bool = false;
      })
    }))
    console.log('in methode vor return: '+bool);
    return bool;
  }
}

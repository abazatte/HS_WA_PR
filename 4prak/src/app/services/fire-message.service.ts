import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, orderBy, query, serverTimestamp } from '@angular/fire/firestore';

import { Observable, from, map } from 'rxjs';
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
    this.chats = collectionData(q);
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

  public async setUsername(username: string){
    if (await this.checkIsValid(username)) this.username = username;
  }

  public getUsername() {
    return this.username;
  }

  private saveUsernameToLocalStorage(username: string){
    if(username !== null && username !== undefined && username != ''){
      localStorage.setItem('username',username);
    }
  }
  private loadUsernameFromLocalStorage(){
    let fromLS = localStorage.getItem('username');
    if(fromLS !== null && fromLS !== undefined && fromLS != ''){
      this.username = fromLS;
    }
  }

  private async checkIsValid(username: string) {
    let bool = true;
    await new Promise<void>((resolve) => {
      this.chats.forEach((element) => {
        try {
          element.forEach(item => {
            if (item.author === username) {
              bool = false;
            }
          })
        } catch (e) {
          // error handling
          console.log(e)
        } finally {
          // most important is here
          resolve()
        }
      })
    })
    return bool;
  }
}


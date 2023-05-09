import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData, orderBy, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireMessageService {
  chats: Observable<any[]>;

  constructor(private firestore: Firestore) {
    const coll = collection(firestore, 'room_0');
    const q = query(coll, orderBy('timestamp', 'desc'));
    this.chats = collectionData(q);
  }

  public getChats() {
    return this.chats;
  }
}

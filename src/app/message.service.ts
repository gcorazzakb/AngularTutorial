import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  messages: string[] = [];

  add(s: string) {
    this.messages.push(s);
  }

  getMessages(): Observable<string[]> {
    return of(this.messages);
  }
}

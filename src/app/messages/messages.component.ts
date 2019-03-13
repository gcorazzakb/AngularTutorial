import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {

  private messages: string[];

  constructor(private msgService: MessageService) {
  }

  getMessages(): string[] {
    this.msgService.getMessages().subscribe(msg => this.messages = msg);
    return this.messages;
  }

  ngOnInit() {
  }
}

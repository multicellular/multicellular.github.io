import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.page.html',
  styleUrls: ['chat.page.scss']
})
export class ChatPage {
  private location: Location;
  private curMessage: string;
  private count: number = 0;
  private messages = [
    {id:'other', content:'Listen, I\'ve had a pretty messed up day...'},
    {id:'me', content:'Listen, I\'ve had a pretty messed up day...'}
  ];

  constructor(location: Location) {
    this.location = location;
  }

  goBack() {
    this.location.back();
  }

  sendMessage() {
    this.count++;
    this.messages.push({
      id: this.count%2 ? 'me' : 'other',
      content: this.curMessage
    });
    this.curMessage = '';
  }

}

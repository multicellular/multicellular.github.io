import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute} from '@angular/router';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-chat',
  templateUrl: 'chat.page.html',
  styleUrls: ['chat.page.scss']
})
export class ChatPage {

  curMessage: string;
  messages = [
    {id:'other', content:'Listen, I\'ve had a pretty messed up day...'},
    {id:'me', content:'Listen, I\'ve had a pretty messed up day...'}
  ];
  private api: string = "http://www.tuling123.com/openapi/api?key=ac7b6152eb2047a1b7e45678bca5b545&info=";
  isRebort = false;
  // contentDom = document.querySelector('ion-content');
  constructor(private location: Location, private route: ActivatedRoute, private http: HttpClient) {
    let params: any = this.route.params;
    this.isRebort = params.value['userID'] === 'rebort';
    if (this.isRebort) {
      this.messages = [{id: 'other', content: '你好，我是有名字的机器人'}]
    }

  }

  goBack() {
    this.location.back();
  }

  sayHi(message) {
    this.http.get(this.api + message)
      .subscribe((data:{code?: number, text:string}) => {
        if (data.text) {
          this.messages.push({
            id: 'other',
            content: data.text
          });
          const contentDom = document.querySelector('ion-content');
          setTimeout(()=>{contentDom.scrollToBottom();},0);
        }
      });
  }

  sendMessage() {
    
    this.messages.push({
      id: 'me',
      content: this.curMessage
    });
    if (this.isRebort) {
      this.sayHi(this.curMessage);
    }
    this.curMessage = '';

  }

}

import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog',
  templateUrl: 'blog.page.html',
  styleUrls: ['blog.page.scss']
})
export class BlogPage {
  private location: Location;
  
  constructor(location: Location) {
    this.location = location;
  }

  goBack(){
    this.location.back();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whoweare',
  templateUrl: './whoweare.page.html',
  styleUrls: ['./whoweare.page.scss'],
})
export class WhowearePage implements OnInit {

  isLiked = false;
  likes = 0;

  constructor() { }

  ngOnInit() {
  }

  like():String{
    this.isLiked = !this.isLiked;
    if (this.isLiked) {
      this.likes+=1;
      return "solid";
    }
    else{
      this.likes-=1;
      return "outline";
    } 
  }
}

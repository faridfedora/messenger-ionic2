import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Page2 } from '../page2/page2';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  selectedItem: any;
  icons: string[];
  //page2= Page2;
  //items: Array<{title: string, note: string, icon: string}>;

  //constructor(public navCtrl: NavController, public navParams: NavParams) {
  //  // If we navigated to this page, we will have an item available as a nav param
  //  this.selectedItem = navParams.get('item');

  //  // Let's populate this page with some filler content for funzies
  //  this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
  //  'american-football', 'boat', 'bluetooth', 'build'];

  //  this.items = [];
  //  for (let i = 1; i < 11; i++) {
  //    this.items.push({
  //      title: 'Item ' + i,
  //      note: 'This is item #' + i,
  //      icon: this.icons[Math.floor(Math.random() * this.icons.length)]
  //    });
  //  }
  //}
    items: any;
    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
        this.navCtrl = navCtrl;
      

      this.http.get('http://localhost:49977/api/Message/Index').map(res => res.json()).subscribe(data => {
          this.items = data;
      });

  }




  itemDeleted(event, messageID) {
    // That's right, we're pushing to ourselves!


      var link = 'http://localhost:49977/api/Message/Delete';
      //var params = JSON.stringify({ MessageID: messageID });
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      let options = new RequestOptions({ headers: headers })
      var params = 'MessageID=' + messageID
      //alert(JSON.stringify(params))

      this.http.post(link,  params, options).map(res => res.json())
          .subscribe(data => {
              // this.data.response = data._body;
              alert(messageID + ' deleted? -' + data)
              this.http.get('http://localhost:49977/api/Message/Index').map(res => res.json()).subscribe(data => {
                  this.items = data;
              });
          }, error => {
              console.log("Oooops!");
          });






  }
  itemEdited(event) {
      //alert("hellllo")
      this.navCtrl.push(Page2);
  }
}

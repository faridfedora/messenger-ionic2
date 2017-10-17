import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-page2',
    templateUrl: 'page2.html'
})
export class Page2 {

    constructor(public navCtrl: NavController) {
    }

    onLink(url: string) {
        window.open(url);
    }
}

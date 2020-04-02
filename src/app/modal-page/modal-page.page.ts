import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage  {

    // Data passed in by componentProps
    @Input() nome: any;
    @Input() array: any[];

    refeicao
    arrayItems
    constructor(navParams: NavParams,private modalCtrl: ModalController) {
      // componentProps can also be accessed at construction time using NavParams
      this.arrayItems = navParams.get("array");
      this.refeicao = navParams.get("nome")
    }
    dismiss() {
      // using the injected ModalController this page
      // can "dismiss" itself and optionally pass back data
      this.modalCtrl.dismiss({
        'dismissed': true
      });
    }
}

import { Component, OnInit, Injectable } from '@angular/core';
import { PratododiaService } from './pratododia.service'
import { ModalController } from '@ionic/angular';
import { ModalPagePage } from './../modal-page/modal-page.page';


@Component({
  selector: 'app-pratododia',
  templateUrl: './pratododia.page.html',
  styleUrls: ['./pratododia.page.scss'],
})
export class PratododiaPage implements OnInit {

  data;
  arraydePratos: any[] = []
  mostrardados:boolean = false

  constructor(private service:PratododiaService, private modal:ModalController) { }


  ngOnInit() {
    this.data = this.dataAtualFormatada(new Date());
    this.carregar(this.data)
  }
  procurarprato(){
    var data = this.dataAtualFormatada(new Date(this.data));
    console.log(data)
    this.carregar(data)
  }
  carregar(data){
    console.log(data)
    this.service.getPratosDoDia().then(
      res=>{
        this.arraydePratos =res.filter((pratos) => {
          // console.log(pratos)
          return pratos.dia===this.formatdb(data)
        })
        this.mostrardados = this.arraydePratos.length>0 ? true : false;
        console.log(this.arraydePratos[0])
      }
    )

  }
  async abrirmodal(array, refeicao){
    console.log("ab mod")
    const modal = await this.modal.create({
      component: ModalPagePage,
      componentProps: {'nome':refeicao,  'array': array}
    });
    return await modal.present();
  } 

  

  
  dataAtualFormatada(data:Date){
    var dia  = data.getDate().toString(),
      diaF = (dia.length == 1) ? '0'+dia : dia,
      mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      mesF = (mes.length == 1) ? '0'+mes : mes,
      anoF = data.getFullYear();
    return anoF+"-"+mesF+"-"+diaF;
  }
  formatdb(data){
    var data2 = data.substr(8,10) + "/" +data.substr(5,2) + "/" +data.substr(0,4)
    return data2;
  }

}

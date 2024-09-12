import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

  name: string = '';
  surname: string = '';
  birthdate: string = '';
  usuario: string = "";


  constructor(private router: Router, private activerouter: ActivatedRoute) {
    this.activerouter.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation()?.extras.state){
        this.usuario = this.router.getCurrentNavigation()?.extras?.state?.['user'];
      }
    })
   }


  clearFields() {
    this.name = '';
    this.surname = '';
    this.birthdate = '';
  }

  ngOnInit() {
  }
  // async showMessage() {
  //   const alert = await this.alertCtrl.create({
  //     header: 'Información',
  //     message: `Nombre: ${this.name} ${this.surname}`,
  //     buttons: ['OK']
  //   });
  //   await alert.present();
  // }
}

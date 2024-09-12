import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  username: string = '';

  constructor(private route: ActivatedRoute, private alertCtrl: AlertController) {
      this.route.queryParams.subscribe(params => {
        this.username = params['username'];
      });
    }

  clearFields() {
    this.name = '';
    this.surname = '';
    this.birthdate = '';
  }

  async showMessage() {
    const alert = await this.alertCtrl.create({
      header: 'Información',
      message: `Nombre: ${this.name} ${this.surname}`,
      buttons: ['OK']
    });
    await alert.present();
  }
}

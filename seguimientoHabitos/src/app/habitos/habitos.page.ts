import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-habitos',
  templateUrl: './habitos.page.html',
  styleUrls: ['./habitos.page.scss'],
})

export class HabitosPage implements OnInit {

  usuario: string = "";

  constructor(private router: Router,private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert(titulo: string, msj: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msj,
      buttons: ['OK']
    });
    await alert.present();
  }

  menuPrincipal(){
    this.router.navigate(['/inicio']);
  }

  menuHabitos(){
    this.router.navigate(['/habitos']);
  }

  menuActividad(){
    this.router.navigate(['/actividades']);
  }

  cerrarSesion(){
    this.presentAlert('Cerrar sesion','Ha cerrado sesion.')
    this.router.navigate(['/login']);
  }
  
}

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


  constructor(private router: Router, private activerouter: ActivatedRoute, private alertController: AlertController) {
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

   cerrarSesion(){
     this.presentAlert('Cerrar sesion','Ha cerrado sesion.')
     this.router.navigate(['/login']);
   }

}

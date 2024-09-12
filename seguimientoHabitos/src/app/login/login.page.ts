import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  usuario2: string = 'Subrosa';
  contrasena2: string = 'Subrosa1234@';
  usuario3: string = 'Mooncake';
  contrasena3: string = 'Mooncake1234@';
  usuario1: string = '';
  contrasena1: string = '';

  
  constructor(private router: Router,private alertController: AlertController) { }

  ngOnInit() {}

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // codigo del team verificacion usuario
  async presentAlert(titulo: string, msj: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msj,
      buttons: ['OK']
    });
    await alert.present();
  }
  validarUsuario(){
    let navigationextras: NavigationExtras = {
      state:{
        user: this.usuario1
      }
    }

    if(this.usuario1 == "" || this.contrasena1 == ""){
      this.presentAlert('Error','Los campos no pueden estar vacios.')
    }

    else if((this.usuario1 != this.usuario2 || this.contrasena1 != this.contrasena2) && (this.usuario1 != this.usuario3 || this.contrasena1 != this.contrasena3)){
      this.presentAlert('Error','Los datos son incorrectos')
    }

    else if(this.usuario1== this.usuario2 && this.contrasena1 == this.contrasena2){
      this.presentAlert('Exito','Usted ha accedido exitosamente.')
      this.router.navigate(['/inicio'], navigationextras);
    }
    else if(this.usuario1== this.usuario3 && this.contrasena1 == this.contrasena3){
      this.presentAlert('Exito','Usted ha accedido exitosamente.')
      this.router.navigate(['/inicio'], navigationextras);
    }
    
  }
}

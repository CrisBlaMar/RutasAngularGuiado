import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor( private router: Router, private authService: AuthService) { }



  /**
   * Nos suscribimos pasandole el email y la contraseña
   * al obtener el token lo almacenamos en el localstorage
   * y nos manda a servers cuando hacemos login y este se
   * encuentra autenticado con el token
   */
  login(){
   this.authService.login(this.email,this.password)
    .subscribe( resp => {
     // console.log(resp);
      localStorage.setItem('token',JSON.stringify(resp));
      this.router.navigateByUrl('servers');
    })
  }


  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router,
    private authService: AuthService) { }

  ngOnInit() {
  }

  //metodo que sirve como un routerlink que nos lleva a una pagina sin recargar la pagina en la que estamos
  onLoadServers(id :number) {
    // complex code that connects to a backend
   
    // navigation to Servers page 
    this.router.navigate(['/servers', id, 'edit'], { queryParams: { allowEdit: '8' }, fragment: 'loading' });

  }
  onlogin() {
    this.authService.login();
  }
 
  onlogout() {
    this.authService.logout();
  }

}
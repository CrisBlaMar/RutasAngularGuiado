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



  login(){
   this.authService.login(this.email,this.password)
    .subscribe( resp => {
      console.log(resp);
      localStorage.setItem('jwt',JSON.stringify(resp));
      this.router.navigateByUrl('servers');
    })
  }



  ngOnInit(): void {
  }

}
